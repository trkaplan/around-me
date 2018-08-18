import axios from "axios"
import { SET_SEARCH_TERM, ADD_API_DATA, SHOW_LOADER } from "./actions"

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
})

export const addAPIData = apiData => ({
  type: ADD_API_DATA,
  payload: apiData
})
export const showLoader = isLoading => ({
  type: SHOW_LOADER,
  payload: isLoading
})

export function findPlaceFromText(keyword) {
  const URL_SEARCH_NEARBY = `/maps/api/place/nearbysearch/json`
  const GOOGLE_API_KEY = "AIzaSyCsO8sOKRBmK3IMLfZolaRybUbEBQ6gYR0"
  const samplePlaceType = "restaurant"

  function getPhotoUrl(photoId, apiKey) {
    const maxWidth = 400
    return ` /maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoId}&key=${apiKey}`
  }
  function getCurrentPosition() {
    return new Promise(resolve => {
      const options = {
        timeout: 5000,
        maximumAge: 60000
      }
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
      }

      window.navigator.geolocation.getCurrentPosition(resolve, error, options)
    })
  }

  function apiDataNormalizer(data) {
    return data.map(place => ({
      id: place.place_id,
      imageURL: place.photos
        ? getPhotoUrl(place.photos[0].photo_reference, GOOGLE_API_KEY)
        : "/images/photo_placeholder.jpg",
      name: place.name,
      favourited: false,
      rate: place.rating || 0
    }))
  }
  return dispatch => {
    dispatch(showLoader(true))
    getCurrentPosition()
      .then(({ coords: { latitude, longitude } }) =>
        axios.get(URL_SEARCH_NEARBY, {
          params: {
            location: `${latitude},${longitude}`,
            radius: 1500,
            type: samplePlaceType,
            keyword,
            key: GOOGLE_API_KEY
          }
        })
      )
      .then(response => {
        const result = apiDataNormalizer(response.data.results)
        dispatch(addAPIData(result))
        dispatch(showLoader(false))
      })
      .catch(error => {
        console.error("axios error", error) // eslint-disable-line no-console
      })
  }
}

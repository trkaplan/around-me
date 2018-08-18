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
  const sampleLatLong = { latitude: 37.76999, longitude: -122.44696 }
  const samplePlaceType = "restaurant"
  const { latitude, longitude } = sampleLatLong

  function getPhotoUrl(photoId, apiKey) {
    const maxWidth = 400
    return ` /maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoId}&key=${apiKey}`
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
    axios
      .get(URL_SEARCH_NEARBY, {
        params: {
          location: `${latitude},${longitude}`,
          radius: 1500,
          type: samplePlaceType,
          keyword,
          key: GOOGLE_API_KEY
        }
      })
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

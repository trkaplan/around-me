import axios from "axios"
import { SET_SEARCH_TERM, ADD_API_DATA, SHOW_LOADER } from "./actions"

const URL_SEARCH_NEARBY = `/maps/api/place/nearbysearch/json`
const GOOGLE_API_KEY = "AIzaSyCsO8sOKRBmK3IMLfZolaRybUbEBQ6gYR0"

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

export const apiCall = async (url, init = null) => {
  try {
    const response = await fetch(url, init)
    const results = await response.json()
    return results
  } catch (error) {
    throw Error
  }
}

export const getLocationFromIp = async () => {
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`
  const init = { method: "POST" }
  return apiCall(url, init)
}

export function fetchPlaces(keyword, placeTypes, location) {
  const { latitude, longitude } = location.coords
  const placePromises = []

  placeTypes.forEach(placeType => {
    placePromises.push(
      axios.get(URL_SEARCH_NEARBY, {
        params: {
          location: `${latitude},${longitude}`,
          radius: 1500,
          type: placeType,
          keyword,
          key: GOOGLE_API_KEY
        }
      })
    )
  })
  return Promise.all(placePromises)
}

export function findPlaceFromText(keyword, placeTypes) {
  function getPhotoUrl(photoId, apiKey) {
    const maxWidth = 400
    return ` /maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoId}&key=${apiKey}`
  }

  function getCurrentPosition() {
    return new Promise(resolve => {
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
        getLocationFromIp().then(response => {
          const { lat, lng } = response.location
          const defaultLocation = {
            title: "Current Location",
            coords: { latitude: lat, longitude: lng }
          }
          resolve(defaultLocation)
        })
      }
      const options = {
        timeout: 5000,
        maximumAge: 60000
      }
      window.navigator.geolocation.getCurrentPosition(resolve, error, options)
    })
  }

  function apiDataNormalizer(response) {
    const { type } = response.config.params
    const places = response.data.results
    const placesProcessed = places.map(place => ({
      id: place.place_id,
      type,
      imageURL: place.photos
        ? getPhotoUrl(place.photos[0].photo_reference, GOOGLE_API_KEY)
        : "/images/photo_placeholder.jpg",
      name: place.name,
      favourited: false,
      rate: place.rating || 0
    }))
    return placesProcessed
  }
  return dispatch => {
    dispatch(showLoader(true))

    getCurrentPosition().then(location => {
      fetchPlaces(keyword, placeTypes, location)
        .then(responses => {
          const result = []
          responses.forEach(response =>
            result.push(apiDataNormalizer(response))
          )
          const mergedResults = [].concat(...result)
          dispatch(addAPIData(mergedResults))
          dispatch(showLoader(false))
        })
        .catch(error => {
          console.error("axios error", error) // eslint-disable-line no-console
        })
    })
  }
}

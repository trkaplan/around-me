import axios from "axios"
import { SET_SEARCH_TERM, ADD_API_DATA } from "./actions"

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
})

export const addAPIData = apiData => ({
  type: ADD_API_DATA,
  payload: apiData
})

export function findPlaceFromText(keyword) {
  const URL_SEARCH_NEARBY = `/maps/api/place/nearbysearch/json`
  const GOOGLE_API_KEY = "AIzaSyCsO8sOKRBmK3IMLfZolaRybUbEBQ6gYR0"
  const sampleLatLong = { latitude: 37.76999, longitude: -122.44696 }
  const samplePlaceType = "restaurant"
  const { latitude, longitude } = sampleLatLong

  return dispatch => {
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
        dispatch(addAPIData(response.data))
      })
      .catch(error => {
        console.error("axios error", error) // eslint-disable-line no-console
      })
  }
}

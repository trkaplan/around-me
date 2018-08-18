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
  const GOOGLE_API_KEY = "AIzaSyCsO8sOKRBmK3IMLfZolaRybUbEBQ6gYR0"
  const URL_PLACE_SEARCH = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@37.76999,-122.44696&key=${GOOGLE_API_KEY}`
  return dispatch => {
    axios
      .get(URL_PLACE_SEARCH)
      .then(response => {
        dispatch(addAPIData(response.data))
      })
      .catch(error => {
        console.error("axios error", error) // eslint-disable-line no-console
      })
  }
}

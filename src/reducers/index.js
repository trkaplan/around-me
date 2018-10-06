import { combineReducers } from "redux"
import {
  SET_SEARCH_TERM,
  ADD_API_DATA,
  SHOW_LOADER,
  SET_PLACE_DETAILS,
  SET_LOCATION
} from "../actions"

const searchTerm = (state = "", action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload
  }
  return state
}

const location = (state = null, action) => {
  if (action.type === SET_LOCATION) {
    return action.payload
  }
  return state
}

const apiData = (state = [], action) => {
  if (action.type === ADD_API_DATA) {
    return action.payload
  }
  return state
}

const placeDetails = (state = null, action) => {
  if (action.type === SET_PLACE_DETAILS) {
    return action.payload
  }
  return state
}

const isLoading = (state = true, action) => {
  if (action.type === SHOW_LOADER) {
    return action.payload
  }
  return state
}
const rootReducer = combineReducers({
  searchTerm,
  location,
  apiData,
  isLoading,
  placeDetails
})

export default rootReducer

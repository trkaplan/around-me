import placeTypes from "../config/placeTypes"

function extractTypeAndKeyword(searchString) {
  let result = {}
  let defaultPlaceTypes

  for (let i = 0; i < placeTypes.length; i += 1) {
    const placeType = placeTypes[i]
    if (placeType.isDefault) {
      defaultPlaceTypes = placeType.id
    }
    if (searchString.indexOf(placeType.name) > -1) {
      result = { placeTypes: placeType.id, keyword: "" }
      break
    }
  }
  if (!result.placeTypes) {
    result = { placeTypes: defaultPlaceTypes, keyword: searchString }
  }

  return result
}

export default extractTypeAndKeyword

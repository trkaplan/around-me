import placeTypes from "../config/placeTypes"

function extractTypeAndKeyword(searchString) {
  let result = { placeTypes: "", keyword: searchString }

  for (let i = 0; i < placeTypes.length; i += 1) {
    if (searchString.indexOf(placeTypes[i].name) > -1) {
      result = { placeTypes: placeTypes[i].id, keyword: "" }
      break
    }
  }
  return result
}

export default extractTypeAndKeyword

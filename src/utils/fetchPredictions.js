import axios from "axios"
import GOOGLE_API_KEY from "../config/keys"

const fetchPredictions = async ({ term, location, sessionToken }) => {
  const { latitude, longitude } = location.coords
  return axios
    .get(`/autocomplete/json`, {
      headers: { "Content-Type": "application/json" },
      params: {
        input: term,
        key: GOOGLE_API_KEY,
        session_token: sessionToken,
        types: "establishment",
        location: `${latitude},${longitude}`,
        radius: "1500",
        strictbounds: true
      }
    })
    .then(response => {
      const { predictions } = response.data
      let options = []

      if (predictions) {
        options = predictions.map(prediction => ({
          value: prediction.place_id,
          label: prediction.structured_formatting.main_text
        }))
      }
      return options
    })
}

export default fetchPredictions

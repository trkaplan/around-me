import GOOGLE_API_KEY from "../config/keys"
import callApi from "./apiCaller"

const getLocationFromIp = async () => {
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`
  const init = { method: "POST" }
  return callApi(url, init)
}
const getCurrentPosition = async () =>
  new Promise(resolve => {
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`) // eslint-disable-line no-console
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

export default getCurrentPosition

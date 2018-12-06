import callApi from "./apiCaller"

const getLocationFromIp = async () => {
  const url = "https://ipapi.co/json"
  const init = { method: "POST"}
  return callApi(url, init)
}

// Turn an HTML5 Geoposition object into a regular object
// https://github.com/zeke/geoposition-to-object

export const geopositionToObject = geoposition => ({
  timestamp: geoposition.timestamp,
  coords: {
    accuracy: geoposition.coords.accuracy,
    latitude: geoposition.coords.latitude,
    longitude: geoposition.coords.longitude
  }
})

export const getCurrentPosition = async () =>
  new Promise(resolve => {
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`) // eslint-disable-line no-console
      getLocationFromIp().then(response => {
        const { latitude, longitude } = response
        const defaultLocation = {
          title: "Current Location",
          coords: { latitude, longitude }
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

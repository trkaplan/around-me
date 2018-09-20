const callApi = async (url, init = null) => {
  try {
    const response = await fetch(url, init)
    const results = await response.json()
    return results
  } catch (error) {
    throw Error
  }
}
export default callApi

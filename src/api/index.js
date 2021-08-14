import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

async function fetchUserData (userName) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${userName}.json`)
    return response
  } catch (e) {
    console.error(e)
  }
}
async function fetchItemData (askId) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${askId}.json`)
    return response
  } catch (e) {
    console.error(e)
  }
}
async function fetchListData (pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`)
    return response
  } catch (e) {
    console.error(e)
  }
}

export {
  fetchUserData,
  fetchItemData,
  fetchListData
}

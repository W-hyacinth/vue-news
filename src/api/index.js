import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

const fetchUserData = (userName) => {
  return axios.get(`${config.baseUrl}user/${userName}.json`)
}
const fetchItemData = (askId) => {
  return axios.get(`${config.baseUrl}item/${askId}.json`)
}
const fetchListData = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export {
  fetchUserData,
  fetchItemData,
  fetchListData
}

import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`)
}
const fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`)
}
const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}
const fetchUserData = (userName) => {
  return axios.get(`${config.baseUrl}user/${userName}.json`)
}
const fetchItemData = (askId) => {
  return axios.get(`${config.baseUrl}item/${askId}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserData,
  fetchItemData
}

import axios from 'axios'
export function getData () {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    responseType: 'json'
  })
}

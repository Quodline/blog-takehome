import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dummyapi.io/data/v1',
    headers: {'app-id': '651fc5f852980170a075ccdd'}
})

export default api
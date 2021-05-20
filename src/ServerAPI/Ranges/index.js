import axios from 'axios'

const createRange = async (range) => {

    return axios.post(`http://localhost:5000/ranges`, range)
        .catch(err => err.response)
}

export default createRange
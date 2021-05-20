import axios from 'axios'

const authUser = async (id, pass) => {

    return axios.get(`http://localhost:5000/profile/${id}/${pass}`)
            .catch(err => err.response)
}

export const registerUserRange = async (id, range) => {
    return axios.post('http://localhost:5000/profile/'+ id +'/ranges', range)
                .catch(err => err.response)
}

export default authUser
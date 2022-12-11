import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL

export async function getUser(userData) {
    try {
        var formData = new FormData()

        formData = {
            "email": userData.email,
            "password": userData.password
        }

        const response = await axios({
            url: `${baseUrl}/user`,
            method: 'POST',
            data: formData
        })
        return response
    } catch (e) {
        console.log(e)
    }
}
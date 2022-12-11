import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL

export async function saveUser(userData) {
    try {
        var formData = new FormData()

        formData = {
            "name": userData.name,
            "surname": userData.surname,
            "email": userData.email,
            "password": userData.password,
        }
        
        const response = await axios({
            url: `${baseUrl}/users`,
            method: 'POST',
            data: formData
        })
        return response
    } catch (e) {
        console.log(e)
    }
}
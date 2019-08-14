import axios from 'axios';
import cookie from 'react-cookies'

function createSession (email, password) {
    axios({
        method: 'POST',
        url: 'http://localhost:5035/api/users/login',
        data: { user: { email, password } }
    }).then(response => {
        cookie.save('session', response.data.user, { path: '/' })
        window.location.replace('/')
    }).catch((err) =>{
        if (err.request.status === 401) {
        }
        alert("Wrong credentials, please check.")
    })
}

export {createSession}
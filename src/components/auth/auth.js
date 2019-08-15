import axios from 'axios';
import cookie from 'react-cookies'

function redirectIfLogged() {
    if (cookie.load('session')) {
        if (window.location.pathname === '/login' || window.location.pathname === '/signup') {window.location.replace('/')}
    }
}

function logout() {
    cookie.remove('session', { path: '/' })
    window.location.replace('/')
}

function createSession (email, password) {
    axios({
        method: 'POST',
        url: 'http://localhost:5035/api/users/login',
        data: { user: { email, password } }
    }).then(response => {
        cookie.save('session', response.data.user, { path: '/' })
        window.location.replace('/')
    }).catch((err) =>{
        alert("Wrong credentials, please check.")
    })
}

function registerUser (email, password) {
    axios({
        method: 'POST',
        url: 'http://localhost:5035/api/users/',
        data: { user: { email, password } }
    }).then(response => {
        cookie.save('session', response.data.user, { path: '/' })
        window.location.replace('/')
    }).catch((err) =>{
        if (err.request.status === 402) {
            alert("This email is already in use.")
        } else {
            alert("Internal server error.")
        }
    })
}

export {createSession,registerUser,redirectIfLogged,logout}
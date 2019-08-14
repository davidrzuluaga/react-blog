import React, {useState} from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Welcome from './components/welcome';
import NotFound from './components/layouts/notfound';
import MenuAppBar from './components/layouts/nav/nav';
import "./sass/App.scss"
import Login from './components/auth/login';
import UserEntries from './components/blog/userentries';
import axios from 'axios';
import cookie from 'react-cookies'
import Loading from './components/layouts/loading';

function App() {
  const [session, setSession] = useState(null)
  
  function checkSession() {
    if (cookie.load('session')) {
      axios({
        headers: {'Authorization':`Token ${cookie.load('session').token}`},
        method: "GET",
        url: `http://localhost:5035/api/users/current`
      }).then(element => {
        setSession(true)
        if (window.location.pathname === '/login') {window.location.replace('/')}
      }).catch(e=>{
        setSession(false)
      })
    } else {
      setSession(false)
    }
  }

  function PrivateRoute({ component: Component, ...rest }) {
    setSession(null)
    checkSession()
    if (session) {
      return <Route {...rest} render={(props) => (
        <Component {...props} />  
      )} />
    } else if (session === null) {
      return <Loading />
    } else {
      return <Redirect to='/login' />
    }
  }

  return (<>
    <MenuAppBar />
    <Switch>
      <Route exact path="/" component={() => <Welcome />}/>
      <Route exact path="/login" component={() => <Login />}/>
      <PrivateRoute path='/protected' component={UserEntries} />
      <Route path="*" component={NotFound}/>
    </Switch>
  </>);
}

export default App;
import React    from 'react';
import ReactDOM from 'react-dom';
import system   from './system.js'
import Error404 from '../components/screens/404/Error404.jsx'
import SignIn   from '../components/screens/signin/SignIn.jsx'
import SignUp   from '../components/screens/Signup/SignUp.jsx'
import Main     from '../components/screens/main/Main.jsx'
import Profile  from '../components/screens/profile/Profile.jsx'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory } from 'react-router-dom'

const isAuth = (system.getCookie("sessionKey") !== undefined)
const userID = system.getCookie("user_id")
console.log(isAuth)
console.log(system.getCookie("sessionKey"))

ReactDOM.render((
    <Router history={browserHistory}>
    {
        !isAuth ? (
            <Switch>
                <Redirect exact from="/" to="/login/signIn"/>
                <Redirect exact from="/user*" to="/login/signIn"/>
                <Route path="/login/signIn" component={SignIn} />
                <Route path="/login/signUp" component={SignUp} />
                <Route component={Error404} />
            </Switch>
        ) : (
            <Switch>
                <Redirect exact from="/" to={"/user" + userID}/>
                <Redirect exact from="/login*" to={"/user" + userID}/>
                <Route path={"/user" + userID} component={Profile} />
                <Route component={Error404} />
            </Switch>
        )
    }
    </Router>
), document.getElementById('app'));

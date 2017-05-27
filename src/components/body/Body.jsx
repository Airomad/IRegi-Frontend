import React from 'react';
import styles from './Body.css'
import SignIn from '../screens/signin/SignIn.jsx'
import SignUp from '../screens/signup/SignUp.jsx'
import Profile from './profile/Profile.jsx'
import system from '../../js/system.js'

class Body extends React.Component {

    constructor() {
        super()
        system.setBodyComponent(this)
    }
   view() {
       if (!system.isUserExists()) {
            console.log("jskdf")
           if (system.getAuthMode() == "auth")
               return <SignIn />
           else
               return <SignUp />
       } else {
           return <Profile />
       }
   }
   render() {
      return (
         <div className={styles.body}>
            { this.view() }
         </div>
      );
   }
}

export default Body;

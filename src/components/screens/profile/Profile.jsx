import React from 'react';
import styles from './Profile.css'
import system from '../../../js/system.js'

const user = system.getUser()

class Profile extends React.Component {

   render() {
      return (
         <div>
            Hello USER
         </div>
      );
   }
}

export default Profile;

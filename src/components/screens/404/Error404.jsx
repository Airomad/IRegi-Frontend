import React from 'react';
import styles from './Error404.css'
import system from '../../../js/system.js'
import {
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Checkbox } from 'react-bootstrap'

class Error404 extends React.Component {

   constructor(props) {
       super(props)
       this.changeAuthMode = this.changeAuthMode.bind(this);
   }

   changeAuthMode(e) {
       e.preventDefault();
       system.setAuthMode("auth")
       var parent = this._reactInternalInstance._currentElement._owner._instance;
       parent.forceUpdate()
   }

   render() {
      return (
        <div>
            ERROR 404
        </div>

      );
   }
}

export default Error404;

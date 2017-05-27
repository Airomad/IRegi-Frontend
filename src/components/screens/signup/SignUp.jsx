import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import styles from './SignUp.css'
import system from '../../../js/system.js'
import {
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Checkbox } from 'react-bootstrap'

class SignUp extends React.Component {

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
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className={styles.loginTitle}>Регистрация</h1>
                    <div className={styles.accountWall}>
                        <img className={styles.profileImg} src={"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"} alt="" />
                        <form className={styles.formSignUp}>

                            <FormControl placeholder="Введите логин" controlId="login" type="text" className={styles.formControl}/>
                            <FormControl placeholder="Введите email" controlId="email" type="email" className={styles.formControl}/>
                            <FormControl placeholder="Введите пароль" controlId="password" type="password" className={styles.formControl}/>

                            <Button className="btn btn-lg btn-primary btn-block" type="submit" block>Регистрация</Button>

                        </form>
                    </div>
                    <Link to={"/signIn"} className={styles.auth}>Войти</Link>
                </div>
            </div>
        </div>

      );
   }
}

export default SignUp;

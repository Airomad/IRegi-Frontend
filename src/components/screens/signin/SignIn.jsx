import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import styles from './SignIn.css'
import system from '../../../js/system.js'
import {
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Checkbox } from 'react-bootstrap'

class SignIn extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           isLoginValid: false,
           isPasswordValid: false,
           login: "",
           password: ""
       }
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleInput = this.handleInput.bind(this)
   }

   handleSubmit(e) {
       e.preventDefault();

       if (this.state.isLoginValid && this.state.isPasswordValid) {
            system.getApiService.signIn(this.state.login, this.state.password)
       } else {
            let message = "Проверьте данные!"
            message += "\nЛогин: " + (this.state.isLoginValid ? "Ок" : "Ошибка")
            message += "\nПароль: " + (this.state.isPasswordValid ? "Ок" : "Ошибка")
            alert(message)
        }
   }

   handleInput(e) {
       let name = e.target.name
       let value = e.target.value
       let isValueValid = false
       if (name == "login") {
           if (value.length > 1 && value.length < 10)
               isValueValid = true

           this.setState({login: value})
           this.setState({isLoginValid: isValueValid})
       } else if (name == "password") {
           if (value.length > 4 && value.length < 10)
               isValueValid = true

           this.setState({password: value})
           this.setState({isPasswordValid: isValueValid})
       }
   }

   render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className={styles.loginTitle}>Авторизация</h1>
                    <div className={styles.accountWall}>
                        <img className={styles.profileImg} src={"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"} alt="" />
                        <form className={styles.formSignin}>

                            <FormControl placeholder="Введите логин" onChange={this.handleInput}
                                validationState="success" name="login" type="text" className={styles.formControl}/>
                            <FormControl placeholder="Введите пароль" onChange={this.handleInput}
                                name="password" type="password" className={styles.formControl}/>

                            <Button className="btn btn-lg btn-primary btn-block" type="submit" block onClick={this.handleSubmit}>Войти</Button>

                            <div className="row">
                                <div className="col-sm-6">
                                    <Checkbox>Запомнить меня</Checkbox>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className={styles.needHelp}>Нужна помощь? </a>
                                </div>
                            </div>

                        </form>
                    </div>
                    <Link to={"/signUp"} className={styles.newAccount}>Создать аккаунт</Link>
                </div>
            </div>
        </div>

      );
   }
}

export default SignIn;

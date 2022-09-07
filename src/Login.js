import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';
import firebase from "firebase";


function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const login = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
          
      })
      .catch((err) => alert(err.message))
  }

  const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) =>{
      history.push('/');

    })
    .catch((err) => alert(err.message))
  }

  return (
    <div className="login">
      <Link to='/'>
        <img className = "login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Avatar" />


      </Link>
      <div className="login__container">
      <h1>Sign in</h1>
        <form className="login__form">
          <h5>E-mail</h5>
          <input value={email} onChange={event =>
          setEmail(event.target.value)} type="email" placeholder="E-mail" />
          <h5>Password</h5>
          <input value={password} onChange={event =>
          setPassword(event.target.value)} type="password" placeholder="Password" />
          <button onClick ={login} className="login__login" >Sign in</button>
        </form>
        <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button onClick ={register} className="login__register">Create your Amazone Account</button>
      </div>
    </div>
  )
}

export default Login
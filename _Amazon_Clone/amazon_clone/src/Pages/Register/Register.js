import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Register.css';

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [arePasswordTheSame, setArePasswordTheSame] = useState(password === repeatPassword);

    useEffect(() => {
        password === repeatPassword
            ? setArePasswordTheSame(true)
            : setArePasswordTheSame(false)

        return () => {
        }

    }, [password, repeatPassword])

    const createAccount = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="register">
            <Link to="/">
                <img
                    className="register__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="register__container">
                <h1>Sign Up</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h5>Username</h5>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <h5>Repeat password</h5>
                    <input className={!arePasswordTheSame && "register__repeatPasswordInvalid"} value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} type="password" />
                    <button onClick={createAccount} type="submit">Create new account</button>
                </form>
                <p>
                    By signing-up you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cokkies Notice and our interest-Based Ads Notice.
                </p>
                <Link to="/login" className="register__loginLink">
                    <button>Go back to login</button>
                </Link>
            </div>
        </div>
    )
}

export default Register

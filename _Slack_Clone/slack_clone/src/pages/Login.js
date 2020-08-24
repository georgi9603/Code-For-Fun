import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../components/StateProvider';
import { actionTypes } from '../stateManagement/actions/actionTypes';

function Login() {
    const [state, dispatch] = useStateValue();

    const SignIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-5guop3/Slack_RGB.png" alt=""></img>
                <h1>Sign in to Slack-Like made by by G.K.</h1>
                <Button onClick={SignIn}>Sign In with Google</Button>
                <p></p>
            </div>
        </div>
    )
}

export default Login

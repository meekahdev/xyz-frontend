import { Button } from 'react-bootstrap';
import styles from './Login.module.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Header from '../Layout/Header/Header';

const Login = (props) => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('logged-user')){
            history.push('/posts')
        }
    }, []);

    console.log(process.env,BASE_URL);

    const loginHandler = () => {
        const obj = {
            password,
            email
        }
        
        console.log('Authenticating Api');
        axios.post(BASE_URL+'/api/login',obj).then(response => {
            console.log('Authenticated Api');
            let userData = response.data.data;
            localStorage.setItem('logged-user', JSON.stringify(userData)); 
            history.push('/');
        }).catch(error => {
            alert('Something Went Wrong');
            console.log('Error on Authentication Api');
            console.log(error)
        })
    }

    return (
        <>
        <Header></Header>
        <div className="mt-4 mb-4 col-sm-6 offset-sm-3 card card-body">
            <h1 className="mb-4">Login Page</h1>
            <div className={styles.reg_input}>
                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            </div>
            <div className={styles.reg_input}>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            </div>
            
            <div className={styles.reg_input}>
                <Button variant="danger">Cancel</Button>
                <Button onClick={loginHandler}>Login</Button>
            </div>
            
        </div>
        </>
        
    )
}

export default Login;
import { Button } from 'react-bootstrap';
import styles from './Register.module.css'
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Header from '../Layout/Header/Header';

const Register = () => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('logged-user')){
            history.push('/')
        }
    }, []);

    const signUp = () => {
        const regObj = {
            name,
            password,
            email
        }
        console.log('Posting Register Api');
        axios.post(BASE_URL+'/api/register',regObj).then(response => {
            console.log('Posted Register Api');
            let userData = response.data.data;
            localStorage.setItem('logged-user', JSON.stringify(userData)); 
            history.push('/');
        }).catch(error => {
            console.log('Error Register Api');
            alert('Something Went Wrong');
            console.log(error)
        })
    }

    return (
        <>
        <Header></Header>
        <div className="mt-4 mb-4 col-sm-6 offset-sm-3 card card-body">
            <h1 className="mb-4">Register Page</h1>
            <div className={styles.reg_input}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
            </div>
            <div className={styles.reg_input}>
                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            </div>
            <div className={styles.reg_input}>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            </div>
            
            <div className={styles.reg_input}>
                <Button variant="danger">Cancel</Button>
                <Button onClick={signUp}>Register</Button>
            </div>
        </div>
        </>
       
    )
}

export default Register;
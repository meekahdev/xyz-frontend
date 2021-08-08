import Header from "../Components/Layout/Header/Header";
import React, { useEffect} from 'react';
import { useHistory } from 'react-router';

const Protected = (props) => {

    const history = useHistory();
    const loggedUser = localStorage.getItem('logged-user');


    // useEffect(() => {
    //     if(!localStorage.getItem('logged-user')){
    //         history.push('/login')
    //     }
    // }, []);

    const Component = props.component;

    return (
        <>
            {
                loggedUser ? 
                    <div><Header /> <Component {...props} /></div>
                :    history.push('/login')
            }
           
        </>
    )
}

export default Protected;
import  './Home.css';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Post from '../Post/Post';


const Home = (props) => {

    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const loggedUser = JSON.parse(localStorage.getItem('logged-user'));
    const [search, setSearch] = useState("");

    useEffect(() => {
        getPosts();
    }, [search]);

    const getPosts = () => {

        setLoader(true);

        const config = {
     
            headers: { Authorization: `Bearer ${loggedUser.token}` },
            params: {search}
            
        };

        console.log('Fetching GetAllPosts Api');
        axios.get('http://127.0.0.1:8000/api/post/get-all', config ).then(response => {
            console.log('Fetched GetAllPosts Api');
            setPosts(response.data.data)
            setLoader(false);
        }).catch(error =>  {
            alert('Something Went Wrong');
            console.log('Error on GetAllPosts Api');
        })
    }


    return (
        <div className="container">
            <div className="row mt-3 mb-3">
                <input value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" type="text" placeholder="Search.."></input>
            </div>
            <div className="row">
                {
                    loader ?
                        <div className="text-center"><Spinner animation="border" /></div>
                    : posts.map(post => {
                        return <div className="col-md-6"><Post post={post} /></div>
                    })
                }

                
            </div>
        </div>   
    )
}

export default Home;
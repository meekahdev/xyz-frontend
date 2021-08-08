import React, { useEffect, useState} from 'react';
import axios from "axios";
import { Spinner } from "react-bootstrap";
import './MyPost.css'
import { Link } from 'react-router-dom';

const MyPost = (props) => {

    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const loggedUser = JSON.parse(localStorage.getItem('logged-user'));
    const role = loggedUser.roles[0].code;
    const [count, setCount] = useState(0);

    useEffect(() => {
        getMyPosts();
    }, [count]);

    const getMyPosts = () => {

        setLoader(true);

        const config = {
            headers: { Authorization: `Bearer ${loggedUser.token}` }
        };

        console.log('Fetching GetMyPosts Api');
        axios.get('http://127.0.0.1:8000/api/post/get-my-posts', config ).then(response => {
            console.log('Fetched GetMyPosts Api');
            setPosts(response.data.data)
            setLoader(false);
        }).catch(error =>  {
            console.log('Error on GetMyPosts Api');
            alert('Something Went Wrong');
        })
    }

    const changeStatus = (id,status) => {
        const config = {
            headers: { Authorization: `Bearer ${loggedUser.token}` },
        };

        const data = {
            id,status
        }
        
        console.log('Posting StatusChange Api');
        axios.post('http://127.0.0.1:8000/api/admin/post/status/change', data, config ).then(response => {
            console.log('Posted StatusChange Api');
            alert(`Successfully ${status}`);
            setCount(count+1)
        }).catch(error =>  {
             console.log('Error on StatusChange Api');
            alert('Something Went Wrong');
        })
    }

    const acceptHander = (id) => {
        changeStatus(id,'approved');
    }

    const rejectHander = (id) => {
        changeStatus(id,'rejected');
    }


    const deletetHander = (id) => {
        const config = {
            headers: { Authorization: `Bearer ${loggedUser.token}` },
        };
        
        console.log('Deleting PostDelete Api');
        axios.delete('http://127.0.0.1:8000/api/post/delete/'+id, config ).then(response => {
            alert('Successfully Deleted');
            console.log('Deleted PostDelete Api');
            setCount(count+1)
        }).catch(error =>  {
            console.log('Error PostDelete Api');
            alert('Something Went Wrong');
        })
    }


    return (
        <div className="container">
            <div className="col-md-12">
            <div>
                <h1 className="text-center mt-3 heading">My Post Page</h1>
                <button className="btn btn-primary mt-3 heading heading-btn"><Link to="/my-post/create">Create Post</Link></button>
            </div>
            
            <table className="mt-3 table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Posted At</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loader ?
                            <div className="text-center"><Spinner animation="border" /></div>
                        : posts.map(post => {
                            return (
                                    <tr>
                                    <th>{post.title}</th>
                                    <td>{post.status}</td>
                                    <td>{post.post_date}</td>
                                    <td>

                                        {
                                            role == 'admin' ?
                                                <>
                                                <button onClick={() => acceptHander(post.id)} className="grid-button btn btn-success">Approve</button>
                                                <button onClick={() => rejectHander(post.id)} className="grid-button btn btn-warning">Reject</button>
                                                </>
                                            : null
                                        }

                                        <button onClick={() => deletetHander(post.id)} className="grid-button btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default MyPost;
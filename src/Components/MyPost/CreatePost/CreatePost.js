
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Form , Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './CreatePost.css'

const CreatePost = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const loggedUser = JSON.parse(localStorage.getItem('logged-user'));
    const history = useHistory();
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${loggedUser.token}` },
        };

        const data = {
           title,description
        }
        
        console.log('Posting PostStore Api');
        axios.post('http://127.0.0.1:8000/api/post/store', data, config ).then(response => {
            console.log('Posted PostStore Api');
            alert('Successfully Created');
            history.push('/my-post');
        }).catch(error =>  {
            console.log('Error PostStore Api');
            alert('Something Went Wrong');
        })
    }

    return (
       
        <div className="container">
            <div className="col-md-12">
                <div>
                    <h1 className="text-center mt-3 heading">Create Post</h1>
                    <button className="btn btn-primary mt-3 heading heading-btn"><Link to="/my-post">My Post</Link></button>
                </div>

                <div className="mb-3 card card-body">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required value={title} onChange={e => setTitle(e.target.value)}  type="text" placeholder="Enter Title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control required value={description} as="textarea" placeholder="Enter Description" onChange={e => setDescription(e.target.value)} />
                        </Form.Group>

                        <div className="form-buttom">
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                        
                    </Form>
                </div>
            
            </div>
        </div>
        
    )
}

export default CreatePost;
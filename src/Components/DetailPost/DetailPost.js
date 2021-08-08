
import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Comments from '../Comments/Comments';
import Post from '../Post/Post';
import './DetailPost.css'

const DetailPost = (props) => {

    const [loader, setLoader] = useState(false);
    const [post, setpost] = useState({});
    const [comment, setComment] = useState("");
    const [count, setCount] = useState(0);
    const loggedUser = JSON.parse(localStorage.getItem('logged-user'));

    useEffect(() => {
        getPost();
    }, [count]);

    var id = props.match.params.id;

    const getPost = () => {

        setLoader(true);

        const config = {
            headers: { Authorization: `Bearer ${loggedUser.token}` }
        };
        
        console.log('Fetching GetPostByID Api');
        axios.get('http://127.0.0.1:8000/api/post/get/'+id, config ).then(response => {
            console.log('Fetched GetPostByID Api');
            setLoader(false);
            setpost(response.data.data);
        }).catch(error =>  {
            console.log('Error on GetPostByID Api');
            alert('Something Went Wrong');
        })
    }

    const commentHandler = () => {
       if(comment != ''){
            const config = {
                headers: { Authorization: `Bearer ${loggedUser.token}` },
            };

            const data = {
                comment,id
            }
            
            console.log('Posting PostComment Api');
            axios.post('http://127.0.0.1:8000/api/post/comment', data, config ).then(response => {
                console.log('Posted PostComment Api');
                alert('Successfully Comment Added');
                setCount(count + 1 );
                setComment("");
            }).catch(error =>  {
                console.log('Error on PostComment Api');
                alert('Something Went Wrong');
            })
       }
       else{
           alert('Please write a comment proceed');
       }
    }

    return (
        <div className="container">
                
                {
                    loader ? <div className="text-center"><Spinner animation="border" /></div> 
                    :   <div className="mt-3 col-md-10 offset-md-1">
                            <Post post={post} />
                            {post.comments ? <Comments comments={post.comments} /> : null}
                            <div className="row comments mb-3">
                                <div className="col-md-10">
                                    <input type="text" value={comment}  onChange={(e) => setComment(e.target.value)} className="form-control" placeholder="Add Comment" />
                                </div>
                                <div className="col-md-2">
                                    <Button onClick={commentHandler}>Add Comment</Button>
                                </div>
                            </div>
                        </div>
                }
           
        </div>
    )
}

export default DetailPost;
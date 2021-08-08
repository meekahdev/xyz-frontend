import  './Post.css';
import React, { useEffect} from 'react';
import Comment from '../Comments/Comments';
import { Link } from 'react-router-dom';

const Post = (props) => {

    return (
        
        <div className="card mb-2">
            <div className="card-body p-2 p-sm-3">
                <div className="media post-item">
                    <a data-toggle="collapse" data-target=".post-content"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="mr-3 rounded-circle" width="50" alt="User" /></a>
                    <div className="media-body">
                        <h6><Link className="text-body" to={`/post/${props.post.id}`}>{props.post.title}</Link></h6>
                        <p className="text-secondary">
                            {props.post.description}
                        </p>
                        <p className="text-muted"><a href="#">{props.post.name}</a> created <span className="text-secondary font-weight-bold">{props.post.post_date}</span>
                            <span className="comment-icon"><i className="fa fa-comment ml-2"></i>{props.post.comments ? props.post.comments.length : 0}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Post;
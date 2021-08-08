import  './Comment.css';
import React, { useEffect} from 'react';

const Comment = (props) => {

    return (
        
            <div className="card mb-2">
                <div className="card-body">
                    <div className="media post-item">
                        <a className="card-link">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle" width="50" alt="User" />
                        </a>
                        <div className="media-body ml-3">
                            <a className="text-secondary">{props.comment.name}</a>
                            <small className="text-muted ml-2">{props.comment.comment_date}</small>
                            <div className="mt-3 font-size-sm">
                                <p>{props.comment.comment}</p>
                            </div>
                            {/* <button className="btn btn-xs text-muted has-icon"><i className="fa fa-heart" aria-hidden="true"></i>1</button> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Comment;
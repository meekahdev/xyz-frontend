import  './Comments.css';
import React, { useEffect} from 'react';
import Comment from './Comment/Comment';

const Comments = (props) => {

    return (

        <div className="comments">
            {
                props.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })
            }
        </div>
       
    )
}

export default Comments;
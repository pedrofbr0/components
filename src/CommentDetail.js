// We use the first letter as a capital letter to name a component
// to make a component configurable we use props
// We need to export the component at the end of the file to let the
// rest of the application know about it

import React from 'react';
// import faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.commentary}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
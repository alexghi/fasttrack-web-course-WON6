import React from "react";

const Post = ( { item } ) => {
    const {id, body: postBody, userId, title} = item;

    return <div className="post">
        <h3>Post id: {id} {title}</h3>
        <p>{postBody}</p>
        <span>{userId}</span>
    </div>
}

export default Post
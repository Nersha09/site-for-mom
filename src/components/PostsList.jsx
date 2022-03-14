import React from "react";

const PostsList = (props) => {
    return(
        <div>
            {props.posts.map( (post, index) =>
        <div key={post.id}className='post'>
            <strong>{index+1}. {post.title}</strong>
            <br/>{post.body} 
            <p style={{textAlign: 'right', color: 'grey'}}>{post.date}</p>
        </div> 
      )}
        </div>
    )
}

export default PostsList;
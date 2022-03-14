import React, { useState } from "react";

const PostForm= (props) => {
    const [post, setPost] = useState({})

    const createNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
            date: new Date().toLocaleDateString()
        }
        props.create(newPost);
        setPost({title: '', body: ''})
    }
    return(
        <form>
            <input
                value={post.title}
                placeholder='Введите заголовок'
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <textarea
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                placeholder='Введите текст'
            />
            <button onClick={createNewPost}>Разместить</button>
        </form>
    )
}

export default PostForm;
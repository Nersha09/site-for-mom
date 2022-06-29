import React, {useState} from "react";
import PostServise from "../API/PostServis";
import { useFetching } from "../hooks/useFetching";
import MyRadio from "../UI/type radio/MyRadio";
import { Button, TextField} from "@mui/material";


const PostForm= (props) => {
    const [post, setPost] = useState({
        header: '', 
        body: '', 
        images: [], 
        date: '', 
        found: 1
    });
    const [fetchPost, postError] = useFetching(async() => {
        const response = await PostServise.keepPost(post.images, post.header, post.body, post.found, post.date, )
    })
    console.log(post.images);
    const createNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        props.create(newPost);
        setPost({images: '', header: '', body: '',date: ''})
        fetchPost();
    }
 
    return(
        <div>
            <div className="form_style">
                <TextField
                    style={{marginBottom: '10px', width: '100%'}}
                    value={post.header}
                    type="text"
                    placeholder='Место для заголовка'
                    onChange={e => setPost({...post, header: e.target.value})}
                />
                <TextField
                    multiline
                    sx={{mb: '10px', width: '100%'}}
                    rows={3}
                    value={post.body}
                    placeholder='Введите основной текст'
                    onChange={e => setPost({...post, body: e.target.value})}
                />
            </div >  
            <MyRadio onChange={e => setPost({...post, found: e})}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="contained-button-file">
                    <input 
                        multiple
                        style={{display: 'none'}}
                        id="contained-button-file" 
                        accept="image/*"
                        type="file"
                        onChange={e => setPost({...post, images: e.target.files})}
                    />  
                    <Button variant="contained" color="error" component="span">
                        добавить
                    </Button>
                </label> 
                <Button 
                    color="error"
                    variant='contained'
                    onClick={createNewPost}>
                        Разместить
                </Button> 
            </div>  
        </div>
    )
}

export default PostForm;
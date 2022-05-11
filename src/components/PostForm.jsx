import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState} from "react";
import MyButton from "../UI/buttton/MyButton";
import MyInput from "../UI/input/MyInput";
import PostServise from "../API/PostServis";
import { useFetching } from "../hooks/useFetching";


const PostForm= (props) => {
    const [post, setPost] = useState({header: '', body: '', image: '', image_1: '', image_2: '', image_3: '', date: '', found: 0});
 // const fetchSortPosts = async () => {
  //     const response = await PostServise.getSorting()
  //     setOrdering(response.data.results)
    const [fetchPost, postError] = useFetching(async() => {
        const response = await PostServise.keepPost(post.image, post.image_1, post.image_2, post.image_3, post.header, post.body, post.date, post.found)
        console.log(response.data);
    })

    const createNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        props.create(newPost);
        setPost({image: '', header: '', body: '',date: ''})
        fetchPost();

    }

    return(
        <div>
            <div className="form_style">
                <MyInput
                    style={{marginBottom: '10px', width: '100%'}}
                    value={post.header}
                    placeholder='Место для заголовка'
                    onChange={e => setPost({...post, header: e.target.value})}
                    type="text"
                />
                <TextField
                    sx={{mb: '10px', width: '100%'}}
                    multiline
                    rows={3}
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder='Введите основной текст'
                />
            </div >  
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {/* <Button 
                    color='error'
                    component="label" 
                    variant="outlined" 
                >
                    Загрузить фото */}
                    <input 
                        // style={{display: 'none'}}
                        accept="image/*"
                        type='file'
                        required multiple
                        // name='files[]'
                        onChange={e => setPost({...post, image: e.target.files, image_1: e.target.files, image_2: e.target.files, image_3: e.target.files})}
                    />
                {/* </Button> */}
                    
                
               
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
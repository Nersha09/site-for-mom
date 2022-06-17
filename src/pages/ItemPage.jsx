import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import PostServise from '../API/PostServis';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Corusel from '../UI/corusel/MyCorusel';

const ItemPage = () => {
  const params = useParams()
  const [post, setPosts] = useState({})
  const [visible, setVisible] = useState(false)
  const [images, setImages] = useState([])
  

  const [fetchPostsById, idError] = useFetching(async() => {
    const response = await PostServise.getById(params.id);
    setPosts(response.data)
    setImages(response.data.images)
  })

    useEffect(() => {
      fetchPostsById()
    }, [])
  return(
    <div>
      <Box 
             sx={{
          bgcolor: '#FFFFF0',
          borderRadius: '15px',
          minHeight: '100vh', 
          boxShadow: '0 0 5px #888', 
          mt:'20px', 
          mb: '10px'}} 
            >
              <div 
                className='photos_style' 
                onClick={() => setVisible(true)}>
                <div className='image_direction'>
                  
                    {images.map((image, ind) => 
                      <div key={ind} className='img_container'> 
                        <img  className='item_image' src={image}/>
                      </div>
                    )} 
                </div>
                <img className='main_image' src={images[0]}/>  
              </div>
                <Corusel 
                  post={post}
                  visible={visible} 
                  setVisible={setVisible}>
                    {images.map((image, ind) => 
                      <div key={ind} className='item'>
                        <img className='image1' src={image}/>
                      </div>
                    )} 
              </Corusel>
        <div className='item_text'>
          <h2>{post.header}</h2>
          <br/>
          {post.body}<br/>
          <div style={{textAlign: 'end', color: '#808080'}}>{post.date}</div>
        </div>
       
      </Box>
 </div>
  )
}
export default ItemPage;
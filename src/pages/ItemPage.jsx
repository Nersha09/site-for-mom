import React, { useState, useEffect } from 'react';
import PostServise from '../API/PostServis';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { Container } from '@mui/material';
import Corusel from '../UI/corusel/MyCorusel';
import MyModal from '../UI/modal/MyModal';

const ItemPage = () => {
  const params = useParams()
  const [post, setPosts] = useState({})
  const [visible, setVisible] = useState(false)

  const [fetchPostsById, idError] = useFetching(async() => {
    const response = await PostServise.getById(params.id);
    setPosts(response.data)
  })
    useEffect(() => {
      fetchPostsById()
    }, [])
  return(
    <div>
      <Container
        sx={{
          maxWidth: 'lg',
          bgcolor: '#FFFFF0',
          border: '1px 0 0 1px solid #A9A9A9', 
          borderRadius: '15px',
          minHeight: '100vh', 
          boxShadow: '0 0 5px #888', 
          mt:'20px', 
          mb: '10px'}}>
            
              <div className='photos_style' 
                onClick={() => setVisible(true)}>
                <div className='image_direction'>
                  <img className='item_image' src={post.image}/>
                  <img className='item_image' src={post.image}/>
                  <img className='item_image' src={post.image}/>
                  <img className='item_image' src={post.image}/>
                </div>
                <img className='main_image' src={post.image}/>  
              </div>
                <Corusel 
                  visible={visible} 
                  setVisible={setVisible}>
                    <div className='item'>
                      <img className='image1' src={post.image}/>
                    </div>
                    <div className='item'>
                      <img className='image1'src={post.image}/>
                    </div>
                    <div className='item'>
                      <img className='image1' src={post.image}/>
                    </div>
                    <div className='item'>
                      <img className='image1' src={post.image}/>
                    </div>
              </Corusel>
        <div className='item_text'>
          {post.header}<br/>
          {post.body}<br/>
          <div style={{textAlign: 'end', color: '#808080'}}>{post.date}</div>
        </div>
      </Container>
       
    </div>
  )
}
export default ItemPage;
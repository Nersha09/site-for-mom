import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PostServise from '../API/PostServis';
import Corusel from '../UI/corusel/MyCorusel';
import { useFetching } from '../hooks/useFetching';


const ItemPage = () => {
  const [post, setPosts] = useState({})
  const [visible, setVisible] = useState(false)
  const [images, setImages] = useState([])
  const mainPicture = images[0]

  const params = useParams()

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
        <div 
          className='photos_style' 
          onClick={() => setVisible(true)}>
            <div className='image_direction'>
              {images.slice(1).map((image, ind) => 
                <div className='img_container' key={ind} > 
                  <img className='item_image' src={image}/>
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
              <div className='item' key={ind} >
                <img className='image1' src={image}/>
              </div>
            )} 
        </Corusel>
        <div className='item_text'>
          <h2>{post.header}</h2>
          <br/>
          {post.body}<br/>
          <div style={{
            marginTop: '20px',
            textAlign: 'end', 
            color: '#808080'}}>
              {post.date}
          </div>
        </div>
      </div>
  )
}
export default ItemPage;
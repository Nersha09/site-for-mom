import { Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


const PostItem = ({post}) => {
  const navigate = useNavigate();
  console.log(post.images[0]);
    return(
      
        <Grid item xs={12} sm={6} md= {4}>
          <Card
            sx={{ 
              maxWidth: 345, 
              maxHeight:424,
              mb: '20px', 
              padding: '10px',
              cursor:'pointer'
            }}
          >
            <CardMedia
              component="img"
              height='300'
              onClick={() => navigate(`/posts/${post.id}`)}
              image={post.images[0]}
            />
            <CardContent>
              <div 
                style={{
                  color: 'grey', 
                  textAlign: 'end', 
                  fontSize: '0.8em'
                }}>
                {post.date}
              </div>
              <Typography  variant='h6' component='h3' height={50}>
                {post.header} 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
  )
}
export default PostItem; 
import { Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


const PostItem = (props) => {
  const navigate = useNavigate();
    return(
      
        <Grid item xs={12} sm={6} md= {4}>
          <Card sx={{ borderRadius: '15px', maxWidth: 345, mb: '20px', maxHeight:424, cursor:'pointer'}}>
            <CardMedia
              component="img"
              sx={{
                borderRadius: '15px',
                height: 300,
                padding: '10px',
                mt: '10px',
              }}
              onClick={() => navigate(`/posts/${props.post.id}`)}
              image={props.post.images[0]}
            />
            <CardContent>
              <div style={{color: 'grey',  display: 'flex', justifyContent: 'flex-end', fontSize: '0.8em'}}>
                {props.post.date}
              </div>
              <Typography  variant='h6' component='h3' height={50}>
                {props.post.header} 
              </Typography>
              <Typography variant='body1' >
                {props.post.body}
              </Typography>
              
            </CardContent>
          </Card>

        </Grid>
        
  )
}
export default PostItem; 
import React from "react";
import { Grid } from "@mui/material";
import PostItem from "./PostItem";

const PostsList = ({posts}) => {
    
    return(
        <Grid container spasing={3}>
            {posts.map((post, index) =>
               <PostItem 
                    
                    key={post.id} 
                    number={index + 1} 
                    post={post}
                /> 
            )}
        </Grid>
    );
};

export default PostsList;
import React from "react";
import { Grid} from "@mui/material";
import PostItem from "./PostItem";

const PostsList = ({posts}) => {
    
    return(
            <Grid container spasing={{xs: 2, md: 3}} sx={{ml: '15px'}}>
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
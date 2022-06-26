import React from "react";
import PostItem from "./PostItem";
import { Grid} from "@mui/material";

const PostsList = ({posts}) => {
    return(
        <Grid  container spacing={{xs: 2, md: 3}}>
            {posts.map((post, index) =>
                <PostItem 
                    key={post.id} 
                    number={index + 1} 
                    post={post}/> 
            )}
        </Grid>
    );
};

export default PostsList; 
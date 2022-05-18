
import React, {useState} from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import SearchButton from "../UI/iconButton/SearchButton";
import { IconButton } from "@mui/material";
import PostServise from "../API/PostServis";
import { useFetching } from "../hooks/useFetching";

const PostFilter = ({ filter, setFilter, fetchSortedPosts}) => {
    
  
    return(
        <div className="filter_style">
            {/* <IconButton onClick={() => setVisible(true)}>
                <SearchButton/>
            </IconButton> */}
            <MyInput
                    styles={{maxWidth: '226px'}}
                    value={filter.query}
                    // onChange={e => setFilter({...filter, query: e.target.value})}
                    size="small"
                    label="Поиск" 
                    variant="outlined" 
                    color="warning"
            />
            <MySelect
                value=''
                onChange={e => fetchSortedPosts(e)}
                defaultValue="Сортировать"
                options={[
                    {value: "-date", name: "по дате"},
                    {value: "header", name: "по названию"}
                ]}
            />
        </div>
    )
}

export default PostFilter;
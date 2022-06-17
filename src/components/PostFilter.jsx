
import { IconButton, InputAdornment } from "@mui/material";
import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import SearchIcon from '@mui/icons-material/Search';

const PostFilter = ({filter, fetchSortedPosts, fetchSortedCategory, fetchSearchPosts }) => {
 
    return(
        
        <div className="filter_style">
          
            <div className="select_filter">
                <MySelect
                value={filter.category}
                onChange={e => fetchSortedCategory(e)}
                defaultValue="Выбрать категорию"
                options={[
                    {value: 0, name: "Потеряшки"},
                    {value: 1, name: "Найденыши"},
                    {value: 2, name: "Ищут новый дом"},
                ]}
            />
            <MySelect
                value={filter.sort}
                onChange={e => fetchSortedPosts(e)}
                defaultValue="Сортировать"
                options={[
                    {value: "-date", name: "по дате"},
                    {value: "header", name: "по названию"}
                ]}
            />
            </div>
            <div className="input_filter">
            <MyInput
                    styles={{maxWidth: '226px',  marginLeft: '5px'}}
                    value=''
                    onChange={e => fetchSearchPosts(e)}
                    size="small"
                    placeholder="Поиск"
                    color="warning"

            />
                
            </div>

        </div>
    )
}

export default PostFilter;
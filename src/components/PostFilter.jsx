
import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, fetchSortedPosts, fetchSortedCategory, fetchSearchPosts }) => {
 
    return(
        
        <div className="filter_style">
            <div className="select_filter">
                <MySelect 
                    styles={{marginLeft: '5px'}}
                    value={filter.category}
                    defaultValue="Выбрать категорию"
                    options={[
                        {value: 0, name: "Потеряшки"},
                        {value: 1, name: "Найденыши"},
                        {value: 2, name: "Ищут новый дом"},
                    ]}
                    onChange={e => fetchSortedCategory(e)}
                />
                <MySelect
                    value={filter.sort}
                    defaultValue="Сортировать"
                    options={[
                        {value: "-date", name: "по дате"},
                        {value: "header", name: "по названию"}
                    ]}
                    onChange={e => fetchSortedPosts(e)}
                />
            </div>
            <div className="input_filter">
                <MyInput
                    styles={{ marginLeft: '5px'}}
                    value=''
                    size="small"
                    placeholder="Поиск"
                    color="warning"
                    onChange={e => fetchSearchPosts(e)}
                />
            </div>
        </div>
    )
}

export default PostFilter;
import React from "react";
import MyInput from "../UI/select/input/MuInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = (props) => {
    return(
        <div className="filter_style">
            <MyInput
                // placeholder="Поиск"
                // value={props.serchQuery}
                // onChange={e => props.setSerchQuery(e.target.value)}
            />
            <MySelect
                value={props.selectedSort}
                onChange={props.sort}
                defaultValue="Сортировать"
                options={[
                {value: "date", name: "по дате"},
                {value: "title", name: "по названию"}
                ]}
            />
        </div>
    )
}

export default PostFilter;
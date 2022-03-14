import React from 'react';
import { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import './styles/App.css'



function App() {
  const [posts, setPosts] = useState([
    {id: "1.", title:" LavaScript 1", body:"пишу сайт маме", date: "27.07.2018"},
    {id: "2.", title:" LavaScript 2", body:"пишу сайт свой перый сайт", date: "12.02.2022"},
    {id: "3.", title:" LavaScript 3", body:"пишу сайт себе", date: "22.04.2009"}
  ])
  const [selectedSort, setSelectedSort] = useState('');
  const [serchQuery, setSerchQuery] = useState('')

  function getSelectPosts() {
    console.log('fghjk')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

   const sortedPosts = getSelectPosts()

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    console.log(posts)
  }
  return (
    <div className="App">
      <PostForm
        create={addNewPost}
      />
      <PostFilter
        sort={sortPosts}
      />
      <PostsList posts={sortedPosts}/>
    </div>
  );
}

export default App;

import {IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState, useMemo } from 'react';
import MyModal from '../UI/modal/MyModal';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostsList from '../components/PostsList';
import PostServise from '../API/PostServis';
import { useFetching } from '../hooks/useFetching';
import MyPogination from '../UI/myPogination/MyPogination';



function Posts () {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [filter, setFilter] = useState({sort: '', category: ''});
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(12)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [ord, setOrd] = useState('-id');
  const [found, setFound] = useState(0)
  const [header, setHeader] = useState('')
  
  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const fetchSearchPosts = async(value) => {
    setHeader(value);
    const response = await PostServise.getAll(ord, limit, currentPage, found, header);
    setCurrentPage(0)
    setCurrentPage(1)
  }  

  const fetchSortedPosts = async(value) => {
    setOrd(value);
    setFilter({...filter, sort: value})
    const response = await PostServise.getAll(ord, limit, currentPage, found, header);
    setCurrentPage(0)
    setCurrentPage(1)
  }  
  const fetchSortedCategory = async(value) => {
    setFound(value);
    setFilter({...filter, category: value})

    const response = await PostServise.getAll(ord, limit, currentPage, found, header);
    setCurrentPage(0)
    setCurrentPage(1)
  }
  
  const [fetchPosts, postsError] = useFetching(async() => {
    
    const response = await PostServise.getAll(ord, limit, currentPage, found, header);
    setPosts(response.data.results);
    setTotalPages(response.data.total_pages);
  }) 


  const changePage = (currentPage) => {
    setCurrentPage(currentPage);
  }

  useEffect(() => {
    
    fetchPosts();
  }, [currentPage])


  
  return (
    <div>
        <Box 
            sx={{
                bgcolor: '#FFFFF0',
                borderRadius: '15px',
                minHeight: '100vh', 
                boxShadow: '0 0 5px #888', 
                // m: '15px',
                mt:'20px', 
                mb: '10px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
              <PostFilter
                fetchSortedPosts={fetchSortedPosts}
                fetchSortedCategory={fetchSortedCategory}
                filter={filter}
                setFilter={setFilter}
                fetchSearchPosts={fetchSearchPosts}
              />
              <IconButton 
                style={{margin: '5px'}}
                onClick={() => setModal(true)}
                title="добавить объявление">
                  <AddIcon fontSize='large'/>
              </IconButton>
              </div>
              <MyModal
                visible={modal}
                setVisible={setModal}>
                  
                  <PostForm create={addNewPost}/>
              </MyModal>
              <PostsList posts={posts}/>
              <MyPogination 
                totalPages={totalPages}
                currentPage={currentPage}
                changePage={changePage}
              />
        </Box>

    </div> 
  );
}

export default Posts;

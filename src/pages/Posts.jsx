import {IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState, useMemo } from 'react';
import MyModal from '../UI/modal/MyModal';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostsList from '../components/PostsList';
import PostServise from '../API/PostServis';
import { useFetching } from '../hooks/useFetching';
import MyPogination from '../UI/myPogination/MyPogination';
import { Container } from '@mui/material';


function Posts () {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(12)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [ord, setOrd] = useState('-id');

   
  
  // const sortedPostst = useMemo(() => {
  //   if (filter.sort) {
  //     return [...posts].sort((a, b) => {a[filter.sort].localeCompare(b[filter.sort])});
  //   }
  //     return posts;
  // }, [filter.sort, posts])

  // const sortSelectPosts = useMemo(() => {
  //     return sortedPostst.filter(post => post.header.toLowerCase().includes(filter.query.toLowerCase()));
      
  // }, [filter.query, sortedPostst])
  
  
  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const fetchSortedPosts = async(sorting) => {
    setOrd(sorting);
    const response = await PostServise.getAll(ord, limit, currentPage);
    setCurrentPage(0)
    setCurrentPage(1)
    // setPosts(response.data.results);
    // setTotalPages(response.data.total_pages);
    console.log(posts);
  }  
 
    
    

  
  
  const [fetchPosts, postsError] = useFetching(async() => {
    const response = await PostServise.getAll(ord, limit, currentPage);
    setPosts(response.data.results);
    console.log(ord);
    setTotalPages(response.data.total_pages);
    console.log(response.data.results);
  }) 

  // const [fetchSortedPosts, sortedError] = useFetching( async(sorting) => {
    

  // })

  
  const changePage = (currentPage) => {
    setCurrentPage(currentPage);
  }

  useEffect(() => {
    fetchPosts();
  }, [currentPage])


  
  return (
    <div>
      
      <Container
        sx={{
          maxWidth: 'lg',
          bgcolor: '#FFFFF0',
          border: '1px 0 0 1px solid #A9A9A9', 
          borderRadius: '15px',
          minHeight: '100vh', 
          boxShadow: '0 0 5px #888', 
          mt:'20px', 
          mb: '10px'}}>
         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
          <PostFilter
            fetchSortedPosts={fetchSortedPosts}
            filter={filter}
            setFilter={setFilter}
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
      </Container>
    </div> 
  );
}

export default Posts;

import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ItemPage from '../pages/ItemPage';
import MainPage from '../pages/MainPage';
import Posts from '../pages/Posts';

const AppRouter = () => {
  return(
    <Routes>
      <Route
        path='/lost'
        element={<Posts/>} />
      <Route
        path='/main'
        element={<MainPage/>} />
      <Route
        path='/posts/:id'
        element={<ItemPage/>} />
    </Routes>
  )
}
export default AppRouter;
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import ItemPage from '../pages/ItemPage';
import MainPage from '../pages/MainPage';
import Posts from '../pages/Posts';
import Contacts from '../pages/Contacts';

const AppRouter = () => {
  return(
    <Routes>
      <Route
        path='/announcements'
        element={<Posts/>}
      />
      <Route
        path='/main'
        element={<MainPage/>} 
      />
      <Route
        path='/posts/:id'
        element={<ItemPage/>} 
      />
      <Route
        path='/about'
        element={<About/>}
      />
      <Route
        path='/contacts'
        element={<Contacts/>}
      />
    </Routes>
  )
}
export default AppRouter;
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import './styles/App.css'
import {Container} from '@mui/material'




function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Container maxWidth='lg'>
          <AppRouter/>
      </Container>
            
    </BrowserRouter>
  );
}

export default App;

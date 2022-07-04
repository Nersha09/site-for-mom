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
      <Container disableGutters sx={{
        bgcolor: '#FFFFF0',
        minHeight: '100vh', 
        boxShadow: '0 0 5px #888', 
        mt:'20px', 
        mb: '10px'}}>
          <AppRouter/>
      </Container>
            
    </BrowserRouter>
  );
}

export default App;

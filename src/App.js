import { Container, Box } from '@mui/material';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import './styles/App.css'




function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      {/* <Container 
            sx={{
              maxWidth: 'lg',
              bgcolor: '#FAF0E6',
              border: '1px 0 0 1px solid #A9A9A9', 
              borderRadius: '15px',
              minHeight: '100vh', 
              boxShadow: '0 0 5px #888', 
              mt:'20px', 
              mb: '10px'}}> */}
            <AppRouter/>
        {/* </Container>  */}
    </BrowserRouter>
  );
}

export default App;

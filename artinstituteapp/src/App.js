import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { initObras } from './actions/actions';

import Header from './components/Header/Header';
import Detalles from './components/Detalles/Detalles';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Tarjetas from './components/Tarjetas/Tarjetas';
import PaginaDefault from './components/PaginaDefault'

import './App.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';

import useStyles from './styles/styles';
import Favoritas from './components/Favoritas/Favoritas';

const App = () => {
  const styles = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initObras())
  }, [dispatch])

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            <Box className={styles.MuiBox}>
              <Home />
            </Box>
          }
          />
          <Route path='detalles/:id' element={
            <Box className={styles.MuiBox} >
                <Detalles />
            </Box>
          }
          />
          <Route path='/grid' element={
            <Box className={styles.MuiBox} >
              <Tarjetas />
            </Box>
          }
          />
          
          <Route path='/favoritas' 
          element={
            <Box className={styles.MuiBox} >
              <Favoritas />
            </Box>
          }
          />
          <Route path='*' element={
            <Box className={styles.MuiBox}>
              <PaginaDefault />
            </Box>
          }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
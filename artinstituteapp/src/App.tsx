import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Favoritas from './components/Favoritas/Favoritas';
import Detalles from './components/Detalles/Detalles';
import useStyles from './styles/styles';
import Tarjetas from './components/Tarjetas/Tarjetas';
import { initPage } from './actions/actions';
import { useAppDispatch } from './hooks/hooks';

const App = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initPage())
  }, [dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <Box className={styles.MuiBox} >
              <Header />
              <Home />
            </Box>
          }
        />
        <Route path='/grid'
          element={
            <Box className={styles.MuiBox} >
              <Header />
              <Tarjetas />
            </Box>
          }
        />
        <Route path='detalles/:id' element={
          <Box className={styles.MuiBox} >
            <Header />
            <Detalles />
          </Box>
        }
        />
        <Route path='/favoritas'
          element={
            <Box className={styles.MuiBox} >
              <Header />
              <Favoritas />
            </Box>
          }
        />
        <Route path='*' element={
          <Box className={styles.MuiBox}>
            <Header />
            {/*<PaginaDefault />*/}
          </Box>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
/*
import useStyles from './styles/styles';
import Favoritas from './components/Favoritas/Favoritas';
*/

/*const styles = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initObras())
  }, [dispatch])
 <Header />
        <Routes>
          <Route path='/' element={
            <Box className={styles.MuiBox}>
              <Home />
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
        <Footer />*/
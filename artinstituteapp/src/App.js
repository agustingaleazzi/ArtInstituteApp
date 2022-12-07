import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from './components/Header/Header';
import Detalles from './components/Detalles/Detalles';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import { useDispatch } from 'react-redux'
import { initObras } from './reducers/reducers';

import './App.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initObras())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <Container fluid>
            <div className="App">
              <Home />
            </div>
          </Container>
        }
        />
        <Route path='/grid' element={
          <Container fluid>
            <div className="App">
              <Grid />
            </div>
          </Container>
        }
        />
        <Route path='/grid/detalles/:id' element={
          <Container fluid>
            <div className="App">
              <Detalles />
              
            </div>
          </Container>
        }
        />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
import React, {useState, useEffect} from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';

import './App.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [obras, setObras] = useState([]);

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,thumbnail,artist_title,publication_history,dimensions,date_display,main_reference_number,image_id'
)
      .then(res => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setObras(res.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    
    <Container>
      <div className="App">
        <Header />
        <Grid obras={obras} /> 
        <Footer />
      </div>
    </Container>
  );
}

export default App;
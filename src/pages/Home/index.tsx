import React from 'react';

import { Container } from './styles';
import logo from '../../assets/share-logo.jpeg';

const Home: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Share Songs Logo" />

      <button type="button">Iniciar</button>
    </Container>
  )
}

export default Home;
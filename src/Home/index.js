import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
`;

const Home = () => (
  <Container>
    <h1>Главная страница</h1>
  </Container>
);

export default Home;

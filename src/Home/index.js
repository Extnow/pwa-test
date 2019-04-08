import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
`;

const Description = styled.p`
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: justify;
`;

const Home = () => (
  <Container>
    <Title>Главная страница</Title>
    <Description>
      Привет
      <span role="img" aria-label="привет">
        👋
      </span>
      эту демку я делал специально для НИРА, чтобы показать некоторые преимущества PWA перед обычным
      сайтом на примере простого приложения-викторины
    </Description>
  </Container>
);

export default Home;

import React from 'react';
import styled from 'styled-components';

import Android from './add-android.jpg';
import Ios from './add-ios.jpg';

const Title = styled.h1`
  margin-top: 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Description = styled.p`
  max-width: 600px;
  line-height: 1.6;
  margin: 0px auto;
  margin-bottom: 20px;
  text-align: justify;
`;

const ImgWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Home = () => (
  <Container>
    <Title>Главная страница</Title>
    <Description>
      Привет
      <span role="img" aria-label="привет">
        👋
      </span>
      эта демка показывает некоторые преимущества PWA перед обычным сайтом на примере простого
      приложения-викторины
    </Description>
    <Description>
      Чтобы добавить приложение на рабочий стол андроид-устройства, просто нажмите на всплывающее
      уведомление в нижней части экрана
    </Description>
    <ImgWrapper>
      <img width="300px" src={Android} alt="добавить на андроиде" />
    </ImgWrapper>
    <Description>
      Чтобы добавить приложение на рабочий стол ios-устройства, необходимо зайти в браузер Safari,
      нажать на кнопку "Отправить" и в появившемся меню выбрать пункт "на экран домой" (работает не
      на всех версиях операционной системы)
    </Description>
    <ImgWrapper>
      <img width="300px" src={Ios} alt="добавить на ios" />
    </ImgWrapper>
    <Description>
      После установки приложения на телефеон, вы можете попробовать отключить интернет, пройти
      викторину и получить достижение офлайн
    </Description>
  </Container>
);

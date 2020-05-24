import React from 'react';
import styled from 'styled-components';

import Send from './send-icon.png';
import IosAdd from './ios-add-icon.png';

const Popup = styled.div`
  text-align: left;
  padding: 15px 50px 15px 15px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  margin: 0px -5%;
  width: 100%;
`;

const CloseButton = styled.button`
  position: fixed;
  right: 0;
  padding: 10px;
  font-size: 19px;
  border: none;
  background-color: transparent;
`;

const Text = styled.div`
  margin-right: 50px;
`;

export const InstallPopup = ({ toggle }) => (
  <Popup>
    <CloseButton onClick={toggle}>✕</CloseButton>
    <Text>Установи приложение на свой iPhone:</Text>
    <Text>
      нажми <img width="15px" src={Send} alt="отправить ios-иконка" />, а затем{' '}
      <img width="20px" src={IosAdd} alt="добавить ios-иконка" /> На экран "Домой"
    </Text>
  </Popup>
);

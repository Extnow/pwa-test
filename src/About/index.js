import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Container = styled.div`
  padding: 0 20px;
`;

const About = () => (
  <>
    <Header title="About" />
    <Container>Некая информация обо мне....</Container>
  </>
);

export default About;

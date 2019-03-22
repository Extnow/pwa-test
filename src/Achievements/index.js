import React from 'react';
import styled from 'styled-components';

import { Achievement } from './Achievement';
import { achievements } from '../api/achievments';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 800px;
  padding: 20px 0px;
  margin: 0 auto;
  background-color: #fff;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0 10px;
  list-style-type: none;
`;

const Item = styled.li`
  margin: 10px;
`;

class Achievements extends React.Component {
  state = {
    achievements,
  };

  render() {
    const { achievements } = this.state;

    return (
      <Container>
        <List>
          {achievements.map(achievement => (
            <Item key={achievement.id}>
              <Achievement img={achievement.img} text={achievement.text} />
            </Item>
          ))}
        </List>
      </Container>
    );
  }
}

export { Achievements };

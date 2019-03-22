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

const AchievementList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0 10px;
  list-style-type: none;
`;

const AchievementItem = styled.li`
  padding: 0;
  margin: 10px;
`;

class Achievements extends React.Component {
  state = {
    items: achievements,
  };

  render() {
    const { items } = this.state;

    return (
      <>
        <Container>
          <AchievementList>
            {items.map(item => (
              <AchievementItem key={item.id}>
                <Achievement
                  key={item.id}
                  id={item.id}
                  isDone={item.isDone}
                  type={item.type}
                  img={item.img}
                  text={item.text}
                />
              </AchievementItem>
            ))}
          </AchievementList>
        </Container>
      </>
    );
  }
}

export { Achievements };

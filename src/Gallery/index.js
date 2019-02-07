import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 10px;
`;

class Gallery extends React.Component {
  state = {
    photos: null,
    isPhotosLoaded: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch('./data/photos.json', {
        mode: 'no-cors',
      });

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const data = await response.json();
      this.setState({ photos: data, isPhotosLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { photos, isPhotosLoaded } = this.state;
    return (
      <React.Fragment>
        <Container>
          {!isPhotosLoaded && <Loader />}
          {photos &&
            photos.map(item => <Photo key={item.id} src={`${item.src}`} alt={`${item.caption}`} />)}
        </Container>
      </React.Fragment>
    );
  }
}

export default Gallery;

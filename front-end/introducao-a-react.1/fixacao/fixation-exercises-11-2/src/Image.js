import React from 'react';
import { image } from './Gato';

class Image extends React.Component {
  render() {
    return 
   <img src={image.name} alt={this.props.alternativeText} />
  }
}

export default Image;
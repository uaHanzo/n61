import React, { Component } from 'react';
import Carousel,{ Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from './21.jpg';
import img2 from './22.jpg';
import img3 from './23.jpg';
import img4 from './24.jpg';
import img5 from './25.jpg';
import ReactDOM from 'react-dom';

export default class MyCarousel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  
  onChange = value => this.setState({ value });

  render() {
    return (
      <div>
      <Carousel 
    value={this.state.value}
        onChange={this.onChange}

      animationSpeed={1500}
      autoPlay={7000}
      stopAutoPlayOnHover
      offset={50}
      clickToChange
      centered
      infinite
      >
        <img src={img1} width="950" height="550" />
        <img src={img2} width="950" height="550" />
        <img src={img3} width="950" height="550" />
        <img src={img4} width="950" height="550" />
        <img src={img5} width="950" height="550" />
      </Carousel>
      <Dots value={this.state.value} onChange={this.onChange} number={5} 
      />
    </div>
    );
  }
}

ReactDOM.render(<MyCarousel />, document.getElementById("carousel"));
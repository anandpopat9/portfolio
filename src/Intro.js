import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div>Hello, I'm
          <span> Anand Popat.</span>
        </div>
        <div>I'm a full-stack web developer.</div>
      </div>
    );
  }
}

export default Intro;
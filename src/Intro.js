import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div>Hello, I'm
          &nbsp;
          <span class="nes-text is-error">Anand Popat</span>
        .
        </div>
        <div>I'm a full-stack web developer.</div>
        <br />
        <button type="button" class="nes-btn is-warning">View my work</button>
      </div>
    );
  }
}

export default Intro;
import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="yview xview f aic jcc abs z10 fade">
          <div className="mw-1 fa mxa z8 bg-white p1">
            <p className="s4">About</p>
            <p>wooooot</p>
          </div>
          <div
            className="fill abs z7 bg-black o-4"
            onClick={() => this.props.toggle('about')}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default About;

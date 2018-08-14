import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Results from '../components/results';

class Analysis extends Component {
  state = {};
  render() {
    return (
      <div className="wide-gutter f">
        <Sidebar />
        <Results />
      </div>
    );
  }
}

export default Analysis;

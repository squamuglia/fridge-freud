import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Results from '../components/results';
import { connect } from 'react-redux';
import { BrowserRouter as Redirect } from 'react-router-dom';

class Analysis extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="my2 x wide-gutter ar">
          <button onClick={this.props.updateTrait('question', 0)}>
            I want a redo!
          </button>
        </div>

        <div className="wide-gutter f">
          <Sidebar />
          <Results />
        </div>
      </React.Fragment>
    );
  }
}

function msp(state) {
  return {
    question: state.question
  };
}

function mdp(dispatch) {
  return {
    updateTrait: (trait, score) => {
      dispatch({ type: 'UPDATE_TRAIT', trait: trait, payload: score });
    }
  };
}

export default connect(
  msp,
  mdp
)(Analysis);

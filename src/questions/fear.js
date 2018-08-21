import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class Fear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: 1,
      guess: '...'
    };
  }

  check = (e, guess) => {
    this.setState({
      ...this.state,
      binary: parseInt(e.target.value, 10),
      guess: guess
    });
    guess === 'Yes'
      ? this.props.updateTrait('objective', 'e')
      : this.props.updateTrait('objective', 'i');
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">
            Assuming for the sake of argument you're a 13 year old heterosexual
            boy, are you threatened by speaking to the cutest girl in class?
          </p>
          {this.state.guess}
          <div className="f fw my1">
            <button
              className="inline-block mr05 fa ac mb1"
              onClick={e => this.check(e, 'Yes')}
            >
              Yes
            </button>
            <button
              className="inline-block mr05 fa ac mb1"
              onClick={e => this.check(e, 'No')}
            >
              No
            </button>
          </div>
          <PrevNext show={true} />
        </div>
      </div>
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
)(Fear);

import React, { Component } from 'react';
import Intro from '../questions/intro';
import Openness from '../questions/openness';
import Spiciness from '../questions/spiciness';
import { connect } from 'react-redux';

class Form extends Component {
  getQuestion1 = () => {
    switch (this.props.question) {
      case 0:
        return <Intro />;

      case 1:
        return <Openness />;

      case 2:
        return <Spiciness />;

      default:
        return <Intro />;
    }
  };

  getQuestion2 = () => {
    switch (this.props.question) {
      case 1:
        return <Intro />;

      case 2:
        return <Openness />;

      case 3:
        return <Spiciness />;

      default:
        return <div />;
    }
  };

  getQuestion3 = () => {
    switch (this.props.question) {
      case 2:
        return <Intro />;

      case 3:
        return <Openness />;

      case 4:
        return <Spiciness />;

      default:
        return <div />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="gutter f fw aic jcc fill abs z3">
          <div className="fa x m1 card">{this.getQuestion1()}</div>
        </div>
        <div className="gutter f fw aic jcc fill abs z2 q2">
          <div className="fa x m1 card">{this.getQuestion2()}</div>
        </div>
        <div className="gutter f fw aic jcc fill abs z1 q3">
          <div className="fa x m1 card">{this.getQuestion3()}</div>
        </div>
      </React.Fragment>
    );
  }
}

function msp(state) {
  return {
    url: state.url,
    user_id: state.user_id,
    token: state.token,
    logged_in: state.logged_in,
    username: state.username,
    question: state.question
  };
}

function mdp(dispatch) {
  return {
    nextQuestion: questionData => {
      dispatch({ type: 'NEXT_QUESTION', payload: questionData });
    },
    previousQuestion: questionData => {
      dispatch({ type: 'PREVIOUS_QUESTION', payload: questionData });
    }
  };
}

export default connect(
  msp,
  mdp
)(Form);

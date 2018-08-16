import React, { Component } from 'react';
import Intro from '../questions/intro';
import Openness from '../questions/openness';
import Spiciness from '../questions/spiciness';
import Pimp from '../questions/pimp';
import R1 from '../questions/r1';
import R2 from '../questions/r2';
import Location from '../questions/location';
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

      case 3:
        return <Pimp />;

      case 4:
        return <R1 />;

      case 5:
        return <R2 />;

      case 6:
        return <Location />;

      default:
        return <div />;
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

      case 4:
        return <Pimp />;

      case 5:
        return <R1 />;

      case 6:
        return <R2 />;

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

      case 5:
        return <Pimp />;

      case 6:
        return <R1 />;

      case 7:
        return <R2 />;

      default:
        return <div />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="gutter f fw aic jcc fill abs z3 q1">
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

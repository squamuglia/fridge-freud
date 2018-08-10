import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Nav from './components/nav';
import Intro from './questions/intro';
import Openness from './questions/openness';
import Spiciness from './questions/spiciness';
import { connect } from 'react-redux';
import './index.css';

class App extends Component {
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
        <Nav />
        <CSSTransitionGroup
          transitionName="q1"
          transitionEnterTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          {this.getQuestion1()}
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="q2"
          transitionEnterTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          {this.getQuestion2()}
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="q3"
          transitionEnterTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          {this.getQuestion3()}
        </CSSTransitionGroup>
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
)(App);

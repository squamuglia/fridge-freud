import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Nav from './components/nav';
import Form from './containers/Form';
import { connect } from 'react-redux';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Route exact path="/" component={() => <Form />} />
          <Route exact path="/analysis" component={() => null} />
          <div className="fix bottom left m1">
            <a
              href="https://github.com/squamuglia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Max
            </a>
          </div>
        </React.Fragment>
      </Router>
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

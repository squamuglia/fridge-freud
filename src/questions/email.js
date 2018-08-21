import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class Email extends Component {
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
  };

  render() {
    console.log('q5', this.state.binary);
    if (this.state.binary === 1) {
      console.log(this.state.binary === 1);
    }
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">How does this make you feel? </p>{' '}
          <div className="email" alt="email" />
          <ul className="f fw">
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio5"
                type="radio"
                name="low"
                value="1"
                checked={this.state.binary === 1}
                onChange={e => this.check(e, 'Yes')}
              />
              <label for="radio5" className="radio-shadow p1 x50 mb2">
                Yes
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio6"
                type="radio"
                name="low"
                value="2"
                checked={this.state.binary === 2}
                onChange={e => this.check(e, 'No')}
              />
              <label for="radio6" className="radio-shadow p1 x50 mb2">
                No
              </label>
            </li>
          </ul>
          <br />
          <PrevNext />
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
)(Email);

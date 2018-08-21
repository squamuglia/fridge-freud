import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class R1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 1,
      guess: '...'
    };
  }

  check = (e, guess) => {
    console.log('r1 event', e.target.value);
    this.setState({
      selection: parseInt(e.target.value, 10),
      guess: guess
    });
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">What do you make of this shit?</p>
          <img src="/r/r1.jpg" className="x" alt="rorschach" />
          <p>I think it's {this.state.guess}</p>
          <ul className="f fw">
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio1"
                type="radio"
                name="low"
                value="1"
                checked={this.state.selection === 1}
                onChange={e => this.check(e, 'a bat.')}
              />
              <label for="radio1" className="radio-shadow p1 x50 mb2">
                Bat
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio2"
                type="radio"
                name="low"
                value="2"
                checked={this.state.selection === 2}
                onChange={e => this.check(e, 'ovaries.')}
              />
              <label for="radio2" className="radio-shadow p1 x50 mb2">
                Ovaries
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio3"
                type="radio"
                name="low"
                value="3"
                checked={this.state.selection === 3}
                onChange={e => this.check(e, 'Mario')}
              />
              <label for="radio3" className="radio-shadow p1 x50 mb2">
                Mario
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio4"
                type="radio"
                name="low"
                value="4"
                checked={this.state.selection === 4}
                onChange={e => this.check(e, 'Woody Woodpecker.')}
              />
              <label for="radio4" className="radio-shadow p1 x50 mb2">
                Woody Woodpecker
              </label>
            </li>
          </ul>

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
)(R1);

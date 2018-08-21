import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class R2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      guess: '...'
    };
  }

  check = (e, guess) => {
    this.setState({
      ...this.state,
      selected: parseInt(e.target.value, 10),
      guess: guess
    });
  };

  render() {
    console.log('q5', this.state.selected);
    if (this.state.selected === 1) {
      console.log(this.state.selected === 1);
    }
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">I've got like 20 of these</p>
          <img src="/r/r2.jpg" className="x" alt="rorschach" />
          <p>I think it's {this.state.guess}</p>
          <ul className="f fw">
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio5"
                type="radio"
                name="low"
                value="1"
                checked={this.state.selected === 1}
                onChange={e => this.check(e, 'a Butterfly.')}
              />
              <label for="radio5" className="radio-shadow p1 x50 mb2">
                Butterfly
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio6"
                type="radio"
                name="low"
                value="2"
                checked={this.state.selected === 2}
                onChange={e => this.check(e, 'ovaries.')}
              />
              <label for="radio6" className="radio-shadow p1 x50 mb2">
                Ovaries
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio7"
                type="radio"
                name="low"
                value="3"
                checked={this.state.selected === 3}
                onChange={e => this.check(e, 'a Stormtrooper')}
              />
              <label for="radio7" className="radio-shadow p1 x50 mb2">
                Stormtrooper
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio8"
                type="radio"
                name="low"
                value="4"
                checked={this.state.selected === 4}
                onChange={e => this.check(e, 'flip.')}
              />
              <label for="radio8" className="radio-shadow p1 x50 mb2">
                Flip
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
)(R2);

import React, { Component } from 'react';
import PrevNext from '../components/prev-next';
import { connect } from 'react-redux';

class Spiciness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baby: null,
      posh: null,
      scary: null,
      ginger: null,
      sporty: null,
      ctrArr: [1, 2, 3, 4, 5]
    };
  }

  spicyUpdate = () => {
    if (this.state.sporty && this.state.scary) {
      const val = this.state.sporty + this.state.scary;
      this.props.updateTrait('spiciness', val);
    }
  };

  handleCheck = girl => {
    if (!this.state[girl]) {
      //if girl is null
      console.log('spiceClick', this.state.ctrArr);
      const girlVal = this.state.ctrArr[0];
      const newArr = this.state.ctrArr;
      newArr.shift();
      this.setState(
        {
          ...this.state,
          [girl]: girlVal,
          ctrArr: newArr
        },
        () => this.spicyUpdate()
      );
    } else {
      //if girl has value
      let ctrArrMod = this.state.ctrArr;
      ctrArrMod.unshift(this.state[girl]); //add girl's value back to array
      ctrArrMod.sort(); //sort array
      this.setState(
        {
          ...this.state,
          ctrArr: ctrArrMod,
          [girl]: null
        },
        () => console.log('spiceClick', this.state.ctrArr)
      );
    }
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">
            {this.props.question}
            /2
          </div>
          <p className="s4">Rank the following</p>
          <ul className="f">
            <li className="inline-block fa ac mb1 p0 spice baby">
              <input
                className="none"
                id="radio1"
                type="checkbox"
                name="low"
                value="1"
                onChange={() => this.handleCheck('baby')}
              />
              <label for="radio1" className="f jcc aic y x">
                {this.state.baby}
              </label>
            </li>
            <li className="inline-block fa ac mb1 p0 spice ginger">
              <input
                className="none"
                id="radio2"
                type="checkbox"
                name="low"
                value="2"
                onChange={() => this.handleCheck('ginger')}
              />
              <label for="radio2" className="f jcc aic y x">
                {this.state.ginger}
              </label>
            </li>
            <li className="inline-block fa ac mb1 p0 spice posh">
              <input
                className="none"
                id="radio3"
                type="checkbox"
                name="low"
                value="3"
                onChange={() => this.handleCheck('posh')}
              />
              <label for="radio3" className="f jcc aic y x">
                {this.state.posh}
              </label>
            </li>
            <li className="inline-block fa ac mb1 p0 spice sporty">
              <input
                className="none"
                id="radio4"
                type="checkbox"
                name="low"
                value="4"
                onChange={() => this.handleCheck('sporty')}
              />
              <label for="radio4" className="f jcc aic y x">
                {this.state.sporty}
              </label>
            </li>
            <li className="inline-block fa ac mb1 p0 spice scary">
              <input
                className="none"
                id="radio5"
                type="checkbox"
                name="low"
                value="5"
                onChange={() => this.handleCheck('scary')}
              />
              <label for="radio5" className="f jcc aic y x">
                {this.state.scary}
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
    question: state.question,
    spiciness: state.spiciness
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
)(Spiciness);

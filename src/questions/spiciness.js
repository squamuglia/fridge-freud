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
      ctr: 1,
      ctrArr: [1, 2, 3, 4, 5]
    };
  }
  handleCheck = girl => {
    if (this.state[girl]) {
      const ctrArrMod = this.state.ctrArr;
      ctrArrMod.unshift(this.state[girl]);
      ctrArrMod.sort();
      this.setState(
        {
          ...this.state,
          ctr: ctrArrMod,
          [girl]: null
        },
        () => console.log('spiceClick', this.state)
      );
    } else {
      const ctrArrMod = this.state.ctrArr;
      ctrArrMod.shift();
      this.setState(
        {
          ...this.state,
          ctrArr: ctrArrMod,
          [girl]: this.state.ctrArr[0]
        },
        () => console.log('spiceClick', this.state)
      );
    }
  };

  // handleCheck = girl => {
  //   if (this.state[girl]) {
  //     this.setState(
  //       {
  //         ...this.state,
  //         ctr: this.state[girl],
  //         [girl]: null
  //       },
  //       () => console.log('spiceClick', this.state)
  //     );
  //   } else {
  //     this.setState(
  //       {
  //         ...this.state,
  //         ctr: this.state.ctr + 1,
  //         [girl]: this.state.ctr
  //       },
  //       () => console.log('spiceClick', this.state)
  //     );
  //   }
  // };

  render() {
    return (
      <React.Fragment>
        <p className="s4">Rank the following</p>
        <ul className="f">
          <li className="inline-block fa ac mb1 p0 spice baby">
            <input
              className="none"
              id="radio1"
              type="checkbox"
              name="low"
              value="1"
              // checked={this.props.spicine === 1}
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
              // checked={this.props.openness === 2}
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
              // checked={this.props.openness === 3}
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
              // checked={this.props.openness === 4}
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
              //checked={this.props.openness === 5}
              onChange={() => this.handleCheck('scary')}
            />
            <label for="radio5" className="f jcc aic y x">
              {this.state.scary}
            </label>
          </li>
        </ul>
        <PrevNext />
      </React.Fragment>
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
    updateSpiciness: score => {
      dispatch({ type: 'UPDATE_SPICINESS', payload: score });
    }
  };
}

export default connect(
  msp,
  mdp
)(Spiciness);

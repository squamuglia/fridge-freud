import React from 'react';
import PrevNext from '../components/prev-next';
import { connect } from 'react-redux';

const openness = props => (
  <div className="gutter f fw aic jcc fill abs">
    <div className="fa x m1 card">
      <div className="x">{props.question}</div>
      <p className="s4">How good do you feel about this?</p>
      <div className="x ac my1">
        <img src="/q/foot.jpg" alt="foot" />
      </div>
      <ul className="f">
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio1"
            type="radio"
            name="low"
            value="1"
            checked={props.openness === 1}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio1" className="radio-shadow p1">
            1
          </label>
        </li>
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio2"
            type="radio"
            name="low"
            value="2"
            checked={props.openness === 2}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio2" className="radio-shadow p1">
            2
          </label>
        </li>
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio3"
            type="radio"
            name="low"
            value="3"
            checked={props.openness === 3}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio3" className="radio-shadow p1">
            3
          </label>
        </li>
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio4"
            type="radio"
            name="low"
            value="4"
            checked={props.openness === 4}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio4" className="radio-shadow p1">
            4
          </label>
        </li>
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio5"
            type="radio"
            name="low"
            value="5"
            checked={props.openness === 5}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio5" className="radio-shadow p1">
            5
          </label>
        </li>
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio6"
            type="radio"
            name="low"
            value="6"
            checked={props.openness === 6}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio6" className="radio-shadow p1">
            6
          </label>
        </li>
        <li className="inline-block mr05 fa ac mb1">
          <input
            className="none"
            id="radio7"
            type="radio"
            name="low"
            value="7"
            checked={props.openness === 7}
            onChange={e => props.updateOpenness(parseInt(e.target.value))}
          />
          <label for="radio7" className="radio-shadow p1">
            7
          </label>
        </li>
      </ul>
      <PrevNext />
    </div>
  </div>
);

function msp(state) {
  return {
    question: state.question,
    openness: state.openness
  };
}

function mdp(dispatch) {
  return {
    updateOpenness: score => {
      dispatch({ type: 'UPDATE_OPENNESS', payload: score });
    }
  };
}

export default connect(
  msp,
  mdp
)(openness);

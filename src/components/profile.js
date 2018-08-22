import React from 'react';
import { connect } from 'react-redux';
import { getPersonality } from '../algo';

const Profile = props => {
  return (
    <div className="fa mw-25 my1">
      <p className="small">You are a:</p>
      <h4>{getPersonality(props).name}</h4>
      <div
        className="red-sq"
        style={{
          background: 'url(' + getPersonality(props).img + ')',
          backgroundSize: 'cover'
        }}
      />
      <p className="s4 b upper">
        {props.subjective}
        {props.objective}
        {props.deductive}
        {props.inductive}
      </p>
      <p>Spiciness: {props.spiciness}</p>
      <ul>
        <li>
          <span className="b">Extraversion</span>
          /Introversion
        </li>
        <li>
          <span className="b">Sensing</span>
          /Intuition
        </li>
        <li>
          <span className="b">Thinking</span>
          /Feeling
        </li>
        <li>
          <span className="b">Judging</span>
          /Perceiving
        </li>
      </ul>
    </div>
  );
};

function msp(state) {
  return {
    username: state.username,
    spiciness: state.spiciness,
    subjective: state.subjective,
    objective: state.objective,
    deductive: state.deductive,
    inductive: state.inductive
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
)(Profile);

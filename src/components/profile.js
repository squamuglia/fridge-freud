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
      <ul>
        <li>Subjective: {props.subjective}</li>
        <li>Objective: {props.objective}</li>
        <li>Deductive: {props.deductive}</li>
        <li>Inductive: {props.inductive}</li>
        <li>Spiciness: {props.spiciness}</li>
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

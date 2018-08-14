import React from 'react';
import { connect } from 'react-redux';
import { getPersonality, getPhotos } from '../algo';

const Sidebar = props => (
  <div className="fa mw-25 my1">
    <p className="small">You are a:</p>
    <h4>{getPersonality(props)}</h4>
    <div
      className="red-sq"
      style={{
        background: 'url(' + getPhotos(props) + ')',
        backgroundSize: 'cover'
      }}
    />
    <ul>
      <li>Openness: {props.openness}</li>
      <li>Conscientiousness: {props.conscientiousness}</li>
      <li>Extraversion: {props.extraversion}</li>
      <li>Agreeableness: {props.agreeableness}</li>
      <li>Neuroticism: {props.neuroticism}</li>
      <li>Spiciness: {props.spiciness}</li>
    </ul>
  </div>
);

function msp(state) {
  return {
    username: state.username,
    openness: state.openness,
    spiciness: state.spiciness,
    conscientiousness: state.conscientiousness,
    extraversion: state.extraversion,
    agreeableness: state.agreeableness,
    neuroticism: state.neuroticism
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
)(Sidebar);

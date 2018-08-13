import React from 'react';
import { connect } from 'react-redux';

const Sidebar = props => (
  <div className="fa">
    <li>open: {props.openness}</li>
    <li>spicy: {props.spiciness}</li>
    <li>fancy: {props.fanciness}</li>
    <li>white: {props.whiteness}</li>
    <li>basic: {props.basicness}</li>
    <li>sexy: {props.sexiness}</li>
    <li>masculine: {props.masculinity}</li>
    <li>feminine: {props.femininity}</li>
    <li>neurotic: {props.seuroticism}</li>
  </div>
);

function msp(state) {
  return {
    username: state.username,
    openness: state.openness,
    spiciness: state.spiciness,
    fanciness: state.fanciness,
    quietness: state.quietness,
    whiteness: state.whiteness,
    basicness: state.basicness,
    sexiness: state.sexiness,
    masculinity: state.masculinity,
    femininity: state.femininity,
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

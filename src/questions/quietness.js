import React, { Component } from 'react';
import PrevNext from '../components/prev-next';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

class Quietness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      selected: [],
      cnt: 0
    };
  }

  handleDrag = (e, ui) => {
    console.log('ui', ui);
    console.log('id', parseInt(ui.node.id, 10));
    const id = parseInt(ui.node.id, 10);
    const newSelected = [...this.state.selected];

    if (ui.y > 90 && !newSelected.includes(id)) {
      newSelected.push(id);
      console.log('inside if', newSelected);
      this.setState(
        {
          ...this.state,
          selected: [...newSelected],
          cnt: this.state.cnt + 1
        },
        () => console.log('state', this.state)
      );
    } else if (ui.y < 90 && newSelected.includes(id)) {
      let index = newSelected.indexOf(id);
      newSelected.slice(index, index + 1);
      console.log('inside else', newSelected);
      this.setState(
        {
          ...this.state,
          selected: [...newSelected],
          cnt: this.state.cnt - 1
        },
        () => console.log('state', this.state)
      );
    }
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">Pimp this ride.</p>
          <div className="x h-25 mb1">
            <Draggable onDrag={this.handleDrag}>
              <div key="1" className="sq rel wheel z10" id="1" />
            </Draggable>
            <div
              className="x taurus"
              style={{ height: '10rem', marginTop: '5rem' }}
            />
          </div>
          <p>{this.state.cnt}</p>
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
)(Quietness);

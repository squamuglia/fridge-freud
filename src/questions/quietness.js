import React, { Component } from 'react';
import PrevNext from '../components/prev-next';
import { connect } from 'react-redux';

class Quietness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      pos: {
        x: 0,
        y: 0
      }
    };
  }

  mouseDown = e => {
    this.setState(
      {
        dragging: true,
        pos: {
          x: e.pageX - this.state.pos.x,
          y: e.pageY - this.state.pos.y
        }
      },
      () => console.log('down', this.state)
    );
  };

  mouseMove = e => {
    if (!this.state.dragging) {
      this.setState(
        {
          pos: {
            x: e.pageX - this.state.pos.x,
            y: e.pageY - this.state.pos.y
          }
        },
        () => console.log('move', this.state)
      );
    }
  };

  mouseUp = e => {
    this.setState(
      {
        dragging: false
      },
      () => console.log('up', this.state)
    );
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">Please send him home</p>
          <div className="x h-25 bg-light mb1">
            <div
              className="red-sq rel"
              style={{ top: this.state.pos.x, left: this.state.pos.y }}
              onClick={this.mouseDown}
              onMouseUp={this.mouseUp}
              onDrag={this.mouseMove}
            />
          </div>
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

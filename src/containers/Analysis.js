import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Results from '../components/results';
import { connect } from 'react-redux';

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  navLink = p => {
    this.setState(
      {
        page: p
      },
      () => console.log('subnav', this.state)
    );
  };

  changePage = () => {
    switch (this.state.page) {
      case 1: {
        return (
          <React.Fragment>
            <div className="my2 x wide-gutter ar">
              <button onClick={this.props.updateTrait('question', 0)}>
                I want a redo!
              </button>
            </div>

            <div className="wide-gutter f">
              <Results />
            </div>
          </React.Fragment>
        );
      }
      case 2: {
        return (
          <React.Fragment>
            <div className="gutter f fw jcc">
              <div className="fa x m1 card">
                <Sidebar />
              </div>
            </div>
          </React.Fragment>
        );
      }

      default:
        return <p>hiiiiii</p>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="p05 x f bg-light">
          <div className="fa ac" onClick={() => this.navLink(1)}>
            Results
          </div>
          <div className="fa ac" onClick={() => this.navLink(2)}>
            Profile
          </div>
          <div className="fa ac" onClick={() => this.navLink(3)}>
            Favorites
          </div>
        </div>
        {this.changePage()}
      </React.Fragment>
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
)(Analysis);

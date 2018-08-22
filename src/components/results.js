import React, { Component } from 'react';
import Restaurant from './restaurant';
import { connect } from 'react-redux';
import Flickity from 'react-flickity-component';

class Results extends Component {
  displayRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
      return <Restaurant fav={false} restaurant={restaurant} />;
    });
  };

  render() {
    return (
      <div className="fa f fw mw-75">
        <p>
          Behold, your darkest desires <span className="small">(probably)</span>
          :
        </p>
        <div className="block x">
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
          >
            {this.displayRestaurants()}
          </Flickity>
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    location: state.location,
    url: state.url,
    restaurants: state.restaurants
  };
}

function mdp(dispatch) {
  return {
    addRests: restaurants => {
      dispatch({ type: 'ADD_RESTAURANTS', payload: restaurants });
    }
  };
}

export default connect(
  msp,
  mdp
)(Results);

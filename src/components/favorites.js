import React from 'react';
import { connect } from 'react-redux';
import Restaurant from './restaurant';
import Flickity from 'react-flickity-component';

const displayRestaurants = props => {
  console.log('fav props', props.restaurants, 'favs', props.favorites);
  if (props.favorites.length) {
    const favorited = props.restaurants.filter(restaurant =>
      props.favorites.includes(restaurant.id)
    );
    console.log('favorited', favorited);
    return favorited.map(restaurant => {
      console.log('restaurant log', restaurant);
      return <Restaurant fav={true} restaurant={restaurant} />;
    });
  } else {
    return <h1>No Faves Yet!</h1>;
  }
};

const Sidebar = props => (
  <div className="fa f fw mw-75">
    <p>Faves:</p>
    <div className="block x">
      <Flickity>{displayRestaurants(props)}</Flickity>
    </div>
  </div>
);

function msp(state) {
  return {
    favorites: state.favorites,
    restaurants: state.restaurants
  };
}

function mdp(dispatch) {
  return {
    addFav: id => {
      dispatch({ type: 'ADD_FAV', payload: id });
    },
    remFav: id => {
      dispatch({ type: 'REMOVE_FAV', payload: id });
    }
  };
}

export default connect(
  msp,
  mdp
)(Sidebar);

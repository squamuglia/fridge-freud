import React, { Component } from 'react';
import Restaurant from './restaurant';
import { connect } from 'react-redux';
import { getPersonality } from '../algo';
import Flickity from 'react-flickity-component';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          image_url: '/chef.jpg',
          name: 'Loading...',
          categories: [{ title: ' ' }],
          rating: 0
        },
        {
          image_url: '/chef.jpg',
          name: 'Loading...',
          categories: [{ title: ' ' }],
          rating: 0
        },
        {
          image_url: '/chef.jpg',
          name: 'Loading...',
          categories: [{ title: ' ' }],
          rating: 0
        }
      ],
      index: 0
    };
  }

  addRestaurants = restaurants => {
    console.log('add restaurants', restaurants);
    if (restaurants.businesses && restaurants.businesses.length) {
      this.setState(
        {
          restaurants: restaurants.businesses
        },
        () => console.log(this.state)
      );
      this.props.addRests(restaurants.businesses);
    }
  };

  componentDidMount() {
    const categories = getPersonality(this.props).params;
    console.log('getPersonality params', categories);
    fetch(this.props.url + '/api/v1/restaurants/filter', {
      method: 'POST',
      body: JSON.stringify({
        location: this.props.location,
        categories: categories
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(response => response.json())
      .catch(error => console.error(`Fetch Error =\n`, error))
      .then(r => this.addRestaurants(r));
  }

  nextThree = () => {
    const nextThree = this.state.restaurants.slice(
      this.state.index,
      this.state.index + 2
    );
    this.setState({
      ...this.state,
      currentRestaurants: nextThree,
      index: this.state.index + 3
    });
  };

  displayRestaurants = () => {
    return this.state.restaurants.map(restaurant => {
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
    url: state.url
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

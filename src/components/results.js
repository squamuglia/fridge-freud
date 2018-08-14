import React, { Component } from 'react';
import Restaurant from './restaurant';
import { connect } from 'react-redux';
import { getCategories } from '../algo';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        { image_url: '/chef.jpg', name: 'Loading...', rating: 0 },
        { image_url: '/chef.jpg', name: 'Loading...', rating: 0 },
        { image_url: '/chef.jpg', name: 'Loading...', rating: 0 }
      ],
      currentRestaurants: [
        { image_url: '/chef.jpg', name: 'Loading...', rating: 0 },
        { image_url: '/chef.jpg', name: 'Loading...', rating: 0 },
        { image_url: '/chef.jpg', name: 'Loading...', rating: 0 }
      ],
      index: 0
    };
  }

  addRestaurants = restaurants => {
    console.log('add restaurants', restaurants);
    if (restaurants.businesses.length) {
      this.setState(
        {
          restaurants: restaurants.businesses,
          currentRestaurants: restaurants.businesses.slice(0, 3)
        },
        () => console.log(this.state)
      );
    }
  };

  componentDidMount() {
    console.log('getPersonality', getCategories(this.props));
    fetch('http://localhost:3000/api/v1/restaurants/filter', {
      method: 'POST',
      body: JSON.stringify({
        location: this.props.location,
        categories: getCategories(this.props)
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

  render() {
    return (
      <div className="fa f fw mw-75">
        <h4>
          Behold, your darkest desires <span className="small">(probably)</span>
          :
        </h4>
        {this.state.currentRestaurants.map(r => (
          <Restaurant
            name={r.name}
            img={r.image_url}
            url={r.url}
            phone={r.display_phone}
            call={r.phone}
            rating={r.rating}
          />
        ))}
        <button onClick={this.nextThree}>Three More!</button>
      </div>
    );
  }
}

function msp(state) {
  return {
    location: state.location
  };
}

export default connect(msp)(Results);

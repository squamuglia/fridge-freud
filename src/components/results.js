import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=brooklyn&categories=mexican',
      {
        crossDomain: true,
        method: 'GET',
        headers: {
          Authorization: 'Bearer '
        }
      }
    )
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  render() {
    return <div className="fa">hii</div>;
  }
}

export default Results;

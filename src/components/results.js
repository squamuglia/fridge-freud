import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=manhattan&categories=ramen,jewish&limit=20',
      {
        headers: {
          Authorization: 'Bearer ' // add api code
        }
      }
    );
  }
  render() {
    return <div className="fa">hii</div>;
  }
}

export default Results;

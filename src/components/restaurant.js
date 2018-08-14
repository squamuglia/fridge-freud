import React from 'react';

const Restaurant = props => (
  <div className="fa w-33 bg-light mb1">
    <div
      className="__res-img"
      style={{ backgroundImage: 'url(' + props.img + ')' }}
    />
    <div className="px05 pb1">
      <p className="s5">{props.name}</p>
      <p>
        {props.rating}
        /5
      </p>
      <a href={'tel:' + props.call}>
        <p>{props.phone}</p>
      </a>
      <a href={props.url} target="_blank">
        <button>go already</button>
      </a>
    </div>
  </div>
);

export default Restaurant;

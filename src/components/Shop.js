import React, { Component } from 'react';
import axios from 'axios';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    axios
      .get('/api/products')
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="shop">
        {this.state.products.map((val, i) => {
          return (
            <div className="product-card" key={i}>
              <h2>{val.id}</h2>
              <h3>{val.name}</h3>
              <h3>{val.description}</h3>
              <p>
                {val.price} {val.image_url}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

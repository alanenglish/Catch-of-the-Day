import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return acc + (count * fish.price || 0 )
      }
      return acc;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;

import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  // constructor is code that runs when component is created
  // constructor() {
  //   super();
  //   // looks for goToStore method, sets itself to its own self and binds to this
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // other way to do above is to bind goToStore to this in the onSubmit function

  goToStore(event) {
    event.preventDefault();
    // console.log('you changed the url');
    // first grab the text from the box
    // this is null in own created method - doesnt implicitly bind all thhe methods to this
    const storeId = this.storeInput.value;
    // console.log(`Going to ${storeId}`);
    // second we're going to transition from / to /store/storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      // <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      // another option above is same as below form tag
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;

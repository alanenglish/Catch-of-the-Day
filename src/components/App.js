import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    // initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // update our state - keep current copy and update
    const fishes = {...this.state.fishes}
    // add in our new fish
    const timestamp = Date.now();
    // assign new fish a unique id
    fishes[`fish-${timestamp}`] = fish;
    // set state with newly created fish
    this.setState({ fishes: fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          loadSamples={this.loadSamples}
          addFish={this.addFish}
        />
      </div>
    );
  }
}

export default App;

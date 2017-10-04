import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
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
          <ul className="list-of-fishes">
            {/* map over object by using Object.keys of the fishes piece of state */}
            {/* set key as key (should be unique) and then send details prop for each key */}
            {
              Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key] } />)
            }
          </ul>
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

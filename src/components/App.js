import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add new number of fish ordered
    order[key] = order[key] +1 || 1;
    // update our state
    this.setState({ order: order })
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
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          loadSamples={this.loadSamples}
          addFish={this.addFish}
        />
      </div>
    );
  }
}

export default App;

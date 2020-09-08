import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Departures from './components/Departures';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 51.489165, longitude: - 0.142499 };
  }

  getBusStop = (lat, lng) => {
    this.setState({ latitude: lat, longitude: lng })
  }

  render() {
    return (
      <div className={styles.App} >
        <Header />
        <main className={styles.Main}>
          <Departures />
          <Map getBusStop={this.getBusStop} />
        </main>
      </div>
    );
  }
}

export default App;

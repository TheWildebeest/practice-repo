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

  setLocationState = (lat, lng) => {
    this.setState({ latitude: lat, longitude: lng })
  }

  fetchDepartures = (lat, lng) => {
    const key = "7c3d3e46d0cc641a20988d30562ee5fc";
    const ID = "401dd4f8";
    console.log(lat, lng, key, ID);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.latitude + this.state.latitude);
    if ((this.state.latitude !== prevState.latitude) || (this.state.longitude !== prevState.longitude)) {
      this.fetchDepartures(this.state.latitude, this.state.longitude);
    }
  }

  render() {
    return (
      <div className={styles.App} >
        <Header />
        <main className={styles.Main}>
          <Departures />
          <Map setLocationState={this.setLocationState} />
        </main>
      </div>
    );
  }
}

export default App;

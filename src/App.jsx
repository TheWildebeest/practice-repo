import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Departures from './components/Departures';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 51.489165,
      longitude: -0.142499,
      atcoCode: 0
    };
  }

  setLocationState = (lat, lng) => {
    this.setState({ latitude: Number(Math.round(lat + 'e6') + 'e-6').toString(), longitude: Number(Math.round(lng + 'e6') + 'e-6').toString() })
  }

  fetchAtcoCode = () => {
    const key = "22da4709b682eb9ec88c9e39e2ce4cc7";
    const ID = "26bf3c4f";
    const { latitude, longitude } = this.state;
    fetch(`http://transportapi.com/v3/uk/places.json?places.json?&app_id=${ID}&app_key=${key}&lat=${latitude}&lon=${longitude}&type=bus_stop`)
      .then(response => response.json())
      .then(data => this.setState({ atcoCode: data.member[0].atcocode }))
      .then()
      .catch(error => alert(error.message));
  }
  componentDidUpdate(prevProps, prevState) {
    if ((this.state.latitude !== prevState.latitude) || (this.state.longitude !== prevState.longitude)) {
      this.fetchAtcoCode();
      console.log("Bus stop updated");
    } else console.log("No change");
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

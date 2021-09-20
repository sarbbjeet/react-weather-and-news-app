import React, { Component, useEffect } from "react";
import StoreContext from "../contexts/storeContext";
import { loadApi } from "../store/weather";
import * as images from "../utils/images";
import "./common/form.css";
import WeatherIcon from "./common/weatherIcon";

export default class WeatherDashboard extends Component {
  static contextType = StoreContext;
  state = {
    weather: {},
  };
  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.setState({ weather: store.getState().entities.weather.data });
    });
    store.dispatch(loadApi("middlesbrough"));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="formContainer mt-3">
        <h3 style={{ alignSelf: "center" }}>{this.state.weather.name}</h3>
        <div className="mt-3 weatherContainer">
          <WeatherIcon label="Sunny" image={images.Sunny} />
          <h2>24C</h2>
          <div>
            <p>Wind: 13 kwph</p>
            <p>Precip: 0 mm</p>
            <p>Pressure: 1022 mb</p>
          </div>
        </div>
      </div>
    );
  }
}

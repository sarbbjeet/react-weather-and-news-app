import React, { Component } from "react";
import { loadApi } from "../store/weather";
import * as images from "../utils/images";
import "./common/form.css";
import WeatherIcon from "./common/weatherIcon";
import { connect } from "react-redux";

class WeatherDashboard extends Component {
  componentDidMount() {
    this.props.loadApi();
  }

  render() {
    return (
      <div className="formContainer mt-3">
        <h3 style={{ alignSelf: "center" }}>{this.props.weather.name}</h3>
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
const mapStateToProps = (state) => ({
  weather: state.entities.weather.data,
});
const mapDispatchToProps = (dispatch) => ({
  loadApi: () => dispatch(loadApi("middlesbrough")),
});
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDashboard); //wraper

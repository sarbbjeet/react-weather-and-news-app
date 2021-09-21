import React, { Component } from "react";
import { loadApi } from "../store/weather";
import "./common/form.css";
import WeatherIcon from "./common/weatherIcon";
import { connect } from "react-redux";

class WeatherDashboard extends Component {
  componentDidMount() {
    const { Latlang } = this.props.history.location.state;
    this.props.loadApi(Latlang); //longitude and latitude
  }
  calcTemp(temp) {
    return (temp - 273).toFixed(1); //define decimal points
  }

  render() {
    const { city, icon, country, description, press, temp, wind } = this.props;

    return (
      <div className="formContainer mt-3">
        <h3 style={{ alignSelf: "center" }}>
          {city}, {country}
        </h3>
        <div className="mt-3 weatherContainer">
          <WeatherIcon
            customStyle={{ flex: 3 }}
            label={description}
            image={icon}
          />
          <h4 style={{ flex: 2 }}>{this.calcTemp(temp)}&deg;C</h4>
          <div style={{ flex: 4, lineHeight: "10px" }}>
            <p>Wind Speed: {wind}</p>
            <p>Precip: 0 mm</p>
            <p>Pressure: {press} mb</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const data = state.entities.weather.data;
  const objLen = Object.keys(data).length;
  if (objLen !== 0)
    return {
      city: data.name, //city name
      temp: data.main.temp,
      press: data.main.pressure,
      wind: data.wind.speed,
      description: data.weather[0].description, //or description
      country: data.sys.country,
      icon: data.weather[0].icon,
    };
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  loadApi: (city) => dispatch(loadApi(city)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDashboard); //wraper

import React, { Component } from "react";
import { loadApi } from "../store/weather";
import "./common/form.css";
import WeatherIcon from "./common/weatherIcon";
import { connect } from "react-redux";

class WeatherDashboard extends Component {
  componentDidMount() {
    const userInput = this.props.history.location.state.city || "";
    this.props.loadApi(userInput); //city
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
            customStyle={{ flex: 2 }}
            label={description}
            image={icon}
          />
          <h3 style={{ flex: 2 }}>{this.calcTemp(temp)}&deg;C</h3>
          <div style={{ flex: 3, lineHeight: "10px" }}>
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

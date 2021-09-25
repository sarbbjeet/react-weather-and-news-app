import React, { Component } from "react";
import {
  getSelectiveApi,
  loadWeatherForcastingApi,
  selectDay,
} from "../store/weather";
import "./common/form.css";
import WeatherIcon from "./common/weatherIcon";
import { connect } from "react-redux";
import HorizonalScrollContainer from "./common/horizonalScrollContainer";
// import { addressByLatlng } from "../utils/customGooglePlacesApi";

class WeatherDashboard extends Component {
  state = {
    day: 0,
    address: "",
  };

  //button event

  changeDay = (d) => {
    this.props.selectDay(d, true); //card active=true
    this.setState({ day: d }); //change day index
    setTimeout(() => this.props.selectDay(d, false), 400);
  };

  async componentDidMount() {
    const { Latlang, address } = this.props.history.location.state;
    // const output = await addressByLatlng(Latlang);
    this.props.loadApi(Latlang); //longitude and latitude
    this.setState({ address });
  }
  calcTemp(temp) {
    return (temp - 273).toFixed(1); //define decimal points
  }
  //method to reduce iteration
  map = (_props) => _props[0][this.state.day];
  render() {
    const { data } = this.props;
    return (
      Object.keys(data).length && (
        <div className="card mt-5 p-2 dashboard-container bg-primary">
          <h3 style={{ textAlign: "center", height: "18%" }}>
            {this.state.address}
          </h3>
          <div className="mt-3 weatherContainer">
            <WeatherIcon
              customStyle={{ flex: 3 }}
              label={this.map(data).description}
              icon={this.map(data).icon}
            />
            <h4 style={{ flex: 2 }}>
              {this.calcTemp(this.map(data).temp)}&deg;C
            </h4>
            <div style={{ flex: 4, lineHeight: "10px" }}>
              <p>Wind Speed: {this.map(data).wind_speed} mph</p>
              <p>Precip: 0 mm</p>
              <p>Pressure: {this.map(data).press} mb</p>
            </div>
          </div>
          <HorizonalScrollContainer
            changeDay={(d) => this.changeDay(d)}
            forcasting={data[0]}
          />
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  const data = state.entities.weather.forcastingApi;
  //console.log(apiArgumentsSelection(data));
  return { data: getSelectiveApi(data) };
};

const mapDispatchToProps = (dispatch) => ({
  loadApi: (latlng) => dispatch(loadWeatherForcastingApi(latlng)),
  selectDay: (id, active) => dispatch(selectDay(id, active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDashboard); //wraper

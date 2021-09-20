import React, { useEffect } from "react";
import * as images from "../utils/images";
import "./common/form.css";
import WeatherIcon from "./common/weatherIcon";
import { loadApi } from "../store/weather";
import store from "../store/configureStore";
import {
  apiCallSuccess,
  apiCallRequest,
  apiCallFailed,
} from "../store/actionCreater";

export default function WeatherDashboard(props) {
  const { addr, temp, wind, press, pre } = props;
  useEffect(() => {
    // store.dispatch({ type: "weather/apiLoaded", payload: { name: "sinhg" } });
    store.dispatch(loadApi("middlesbrough"));
    //store.dispatch(apiCallFailed({ singh: "/dashboad" }));
    // store.dispatch(apiCallSuccess({ name: "singh" }));
  }, []);

  return (
    <div className="formContainer mt-3">
      <h3 style={{ alignSelf: "center" }}>{addr}</h3>
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

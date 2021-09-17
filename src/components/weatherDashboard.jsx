import React from "react";
import * as images from "../utils/images";
import "./common/form.css";

export default function WeatherDashboard() {
  return (
    <div className="formContainer mt-3">
      <h3 style={{ alignSelf: "center" }}> middlesbrough, england </h3>
      <div
        className="mt-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          lineHeight: "4px",
        }}
      >
        <div>
          <img width="80px" src={images.cloud_moon} alt="icon" />
          <h4>Sunny</h4>
        </div>
        <h2>24C</h2>
        <div>
          <p>Wind: 13 kwph</p>
          <p>Precip: 0 mm</p>
          <p>Pressure: 1022 mb</p>
        </div>
      </div>
      {/* <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione velit
        quod culpa. Minus quia eaque eveniet. Provident tenetur quaerat labore,
        velit sed sunt laborum distinctio voluptates incidunt eveniet
        praesentium a.{" "}
      </p> */}
    </div>
  );
}

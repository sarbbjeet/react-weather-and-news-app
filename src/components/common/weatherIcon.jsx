import React from "react";

export default function WeatherIcon(props) {
  const { image, label } = props;
  return (
    <div>
      <img width="80px" src={image} alt="icon" />
      <h4>{label}</h4>
    </div>
  );
}

import React from "react";
import * as images from "../../utils/images";

export default function WeatherIcon(props) {
  const { image, label, customStyle } = props;
  const selectImage = () => {
    switch (image) {
      case "04n":
        return images.Partly_Sunny;
      case "02d":
        return images.few_clouds;
      default:
        return images.Sunny;
    }
  };
  return (
    <div
      style={{
        ...customStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img width="80%" src={selectImage()} alt="icon" />
      <h4 alignself="center">{label}</h4>
    </div>
  );
}

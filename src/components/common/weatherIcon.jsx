import React from "react";
// import * as images from "../../utils/images";

export default function WeatherIcon(props) {
  const { icon, label, customStyle } = props;
  const getIconUrl = () => `http://openweathermap.org/img/wn/${icon}@2x.png`;

  // const selectImage = () => {
  //   switch (icon) {
  //     case "04n":
  //       return images.Partly_Sunny;
  //     case "02d":
  //       return images.few_clouds;
  //     default:
  //       return images.Sunny;
  //   }
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...customStyle,
      }}
    >
      {/* <img width="80%" src={selectImage()} alt="icon" /> */}
      {/* paste directly web url of image */}
      <img
        style={{ position: "relative", bottom: "20px" }}
        width="100%"
        src={getIconUrl()}
        alt="icon"
      />

      <h6 style={{ position: "relative", bottom: "20px" }} alignself="center">
        {label}
      </h6>
    </div>
  );
}

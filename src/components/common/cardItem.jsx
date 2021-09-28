import React from "react";

export default function CardItem(props) {
  const { title, img } = props;
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100px",
        backgroundColor: "#ffffff",
      }}
    >
      <img
        style={{
          flex: 2,
          marginRight: "1rem",
          width: "25%",
          height: "80%",
          borderRadius: "2px",
        }}
        src={img}
        alt="icon"
      />
      <p style={{ flex: 5 }}>{title}</p>
    </div>
  );
}

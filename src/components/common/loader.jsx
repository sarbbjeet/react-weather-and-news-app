import React from "react";

export default function Loader(props) {
  const { style } = props;
  return (
    <div style={{ fontSize: "2rem", ...style }} className="fa-3x">
      {/* <i class="fas fa-spinner fa-spin"></i> */}
      <i className="fas fa-circle-notch fa-spin"></i>
    </div>
  );
}

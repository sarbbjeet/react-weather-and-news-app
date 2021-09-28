import React from "react";

export default function CardHeader(props) {
  const navItemStyle = {
    margin: "12px 0 0 5px",
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px 5px 0 0",
  };

  const { cardHeaderItems, extraProps } = props;
  return (
    <div className="cards_container" style={{ backgroundColor: "#e0e0e0" }}>
      {cardHeaderItems.map((item, idx) => (
        <div
          key={idx}
          style={{
            ...navItemStyle,
            backgroundColor: item.active && "#ffffff",
          }}
          {...extraProps(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

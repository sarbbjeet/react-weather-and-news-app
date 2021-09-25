import React from "react";
import "./form.css";
import moment from "moment";

export default function HorizonalScrollContainer(props) {
  const { forcasting } = props;
  const cardActiveTrue = { boxShadow: "10px 10px 20px rgba(255, 0, 0, 0.8)" };
  const cardActiveFalse = { boxShadow: "5px 5px 10px rgba(0, 89, 255, 0.8)" };
  const getIconUrl = (icon) =>
    `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="cards_container">
      {forcasting.map((dayItem) => (
        <div
          key={dayItem.id}
          onClick={() => props.changeDay(dayItem.id)}
          className="card_mini"
          style={dayItem.active ? cardActiveTrue : cardActiveFalse}
        >
          <h6 style={{ position: "relative" }}>
            {moment.unix(dayItem.dt).format("dddd").substring(0, 3)}
          </h6>
          <img
            style={{
              position: "relative",
              bottom: "30px",
            }}
            src={getIconUrl(dayItem.icon)}
            alt="icon"
          />
          <h6 style={{ position: "relative", bottom: "50px" }}>
            {Math.round((dayItem.rain > 1 ? 1 : dayItem.rain) * 100)}%
          </h6>
        </div>
      ))}
    </div>
  );
}

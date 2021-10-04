import React, { useEffect, useState } from "react";
export default function CardHeader(props) {
  const [headerState, setHeaderState] = useState([]);
  const navItemStyle = {
    margin: "12px 0 0 5px",
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px 5px 0 0",
  };

  useEffect(() => {
    setHeaderState((headerState) => [...headerState, (headerState[0] = true)]);
  }, []);

  //update state
  const handleHeaderClick = (headers, idx) => {
    headers.forEach((element, i) => {
      idx === i ? (headerState[i] = true) : (headerState[i] = false);
    });
    setHeaderState([...headerState]);
  };
  const { cardHeaderItems, clickEvent } = props;
  return (
    <div className="cards_container" style={{ backgroundColor: "#e0e0e0" }}>
      {cardHeaderItems.map((name, idx) => (
        <div
          key={idx}
          style={{
            ...navItemStyle,
            backgroundColor: headerState[idx] && "#ffffff",
          }}
          onClick={() => {
            handleHeaderClick(cardHeaderItems, idx); //handle state for gui
            clickEvent({ name, id: idx }); // do event operations when user clicked
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

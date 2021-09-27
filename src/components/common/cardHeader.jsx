import React from "react";
import { useDispatch } from "react-redux";
import { updateCardHeaderState } from "../../store/newsStore";

export default function CardHeader(props) {
  const dispatch = useDispatch();
  const navItemStyle = {
    margin: "12px 0 0 5px",
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px 5px 0 0",
  };
  const extraProps = (item) => ({
    onClick: () => dispatch(updateCardHeaderState({ ...item, active: true })),
  });
  const { cardHeaderItems } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "10%",
        backgroundColor: "gray",
        overflowX: "auto",
      }}
    >
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

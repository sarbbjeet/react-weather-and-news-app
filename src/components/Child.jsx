import React from "react";

export default function Child(props) {
  const { handleEvent } = props;
  const getInputProps = (obj) => {
    return { onChange: handleEvent, placeHolder: obj.placeHolder };
  };
  return props.children(getInputProps);
}

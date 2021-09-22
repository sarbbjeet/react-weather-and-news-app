import React from "react";
import Child from "./Child";

export default function News() {
  return (
    <div>
      <Child handleEvent={() => console.log("event")}>
        {(getInputProps) => {
          return (
            <div>
              <input
                {...getInputProps({
                  placeHolder: "search..",
                })}
              ></input>
            </div>
          );
        }}
      </Child>
    </div>
  );
}

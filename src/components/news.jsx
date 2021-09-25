import React from "react";
import moment from "moment";

export default function News() {
  return (
    <div>
      {console.log(moment.unix(1632571200).format("ll"))}
      <h1>news</h1>
    </div>
  );
}

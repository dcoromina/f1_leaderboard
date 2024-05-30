import { circuitData } from "../circuit/circuitdata";
import React from "react";

export default function List() {
  const listItems = circuitData.map((circuitData) => (
    <div className="">
      <img
        className="object-scale-down max-h-full m-auto "
        src={circuitData.image}
        alt={circuitData.name + "circuit layout"}
        width={100}
        height={100}
      />
      <p>
        <b>{circuitData.name}:</b>
      </p>
    </div>
  ));

  return <div className="flex flex-row flex-wrap  h-20">{listItems}</div>;
}

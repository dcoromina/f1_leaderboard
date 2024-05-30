import React from "react";
import DriverCard from "../driver_card";

const race_podium = () => {
  return (
    <div className="flex flex-row space-x-10 items-end">
      <DriverCard />
      <DriverCard />
      <DriverCard />
    </div>
  );
};

export default race_podium;

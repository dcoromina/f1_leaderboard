import React from "react";
import RaceLeaderboard from "../race/race_leaderboard";

const driver_positions = () => {
  return (
    <div className="grid grid-cols-2 gap-5 bg-red-400  ">
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
      <RaceLeaderboard />
    </div>
  );
};

export default driver_positions;

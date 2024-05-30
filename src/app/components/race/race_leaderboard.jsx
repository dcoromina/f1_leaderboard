import React from "react";
import Image from "next/image";

const race_leaderboard = () => {
  return (
    <div className="w-64 h-12 bg-slate-200 flex flex-row text-black items-center px-3 space-x-3 rounded-md justify-evenly">
      <div className="text-3xl font-bold">1</div>
      <Image
        className=""
        src="https://dcoromina.s-ul.eu/image/M6DtdQl6"
        width={30}
        height={30}
        alt="Logo of the author"
      />
      <div className="uppercase font-bold">Verstappen</div>
      <Image
        className=""
        src="https://dcoromina.s-ul.eu/image/XUjwYsd9"
        width={45}
        height={45}
        alt="Logo of the author"
      />
    </div>
  );
};

export default race_leaderboard;

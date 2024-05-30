import React from "react";
import Image from "next/image";

const driver_card = () => {
  return (
    <div className="w-48 h-72 bg-gradient-to-b to-blue-950 from-red-700 flex flex-col rounded-tr-[4rem] rounded-bl-[4rem] relative z-0 mt-20">
      <div className="text-[15rem] font-bold absolute z-10  m-0 -top-32 left-4">
        1
      </div>
      <Image
        className="absolute z-20 h-auto w-80 left-8 bottom-10"
        src="https://dcoromina.s-ul.eu/image/HS2gEfJk"
        width={1000}
        height={1000}
        alt="Logo of the author"
      />
      <div className="w-full h-12 bg-white flex flex-row items-center space-x-1  absolute z-40 bottom-0 rounded-bl-[4rem] justify-center">
        <div className="w-5 h-5 bg-black"></div>
        <div className="text-black text-lg font-bold uppercase">Verstappen</div>
      </div>
    </div>
  );
};

export default driver_card;

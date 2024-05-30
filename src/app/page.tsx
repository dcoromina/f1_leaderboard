import Image from "next/image";
import RacePodium from "../app/components/race/race_podium";
import NavBar from "../app/components/nav/navbar";
import DriversPositions from "../app/components/race/driver_positions";

export default function Home() {
  return (
    <main className=" bg-black px-24 ">
      <div className="h-50 w-full">
        <NavBar />
      </div>
      {/* <div className="flex h-full flex-col items-center justify-center">
        <div className="flex-1 space-y-10 ">
          <RacePodium />
          <DriversPositions />
        </div>
      </div> */}
    </main>
  );
}

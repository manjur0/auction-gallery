import { Suspense } from "react";
import AcutionProducts from "./acutionProducts";
import Table from "./Table";

const auctionPromise = async () => {
  const auctionData = await fetch("bid.json");
  const acutions = await auctionData.json();
  return acutions;
};
const auctionProducts = auctionPromise();

const MainBoard = () => {
  return (
    <div className="container mx-auto  py-12 grid grid-cols-4 gap-4 justify-center items-center">
      <div className=" bg-white rounded-2xl p-5 col-span-3">
        <div className="overflow-x-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <AcutionProducts auctionProducts={auctionProducts} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;

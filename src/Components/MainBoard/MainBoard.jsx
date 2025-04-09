import { Suspense, useState } from "react";
import AcutionProducts from "./acutionProducts";
import Favorite from "../../Favorite/Favorite";
import toast from "react-hot-toast";

// data fetching
const auctionPromise = async () => {
  const auctionData = await fetch("bid.json");
  const acutions = await auctionData.json();
  return acutions;
};
const auctionProducts = auctionPromise();

const MainBoard = () => {
  const [auctionData, setAuctionData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [active, setActive] = useState(false);

  const handleAuctionData = (event, price) => {
    console.log(event);
    setAuctionData((prev) => [...prev, event]);
    setTotalPrice((prev) => prev + price);
    if (auctionData.length === 0 || auctionData.length > 0) {
      toast.success("Successfully added to favorites!");
    } else {
      toast.error("Something went wrong!");
    }
    setActive(event.id);
  };
  return (
    <div className="container mx-auto  py-12 grid grid-cols-4 gap-4 justify-center ">
      <div className=" bg-white rounded-2xl p-5 col-span-3">
        <div className="overflow-x-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <AcutionProducts
              auctionProducts={auctionProducts}
              handleAuctionData={handleAuctionData}
              active={active}
            />
          </Suspense>
        </div>
      </div>
      <div className="col-span-1 ">
        <Favorite auctionData={auctionData} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default MainBoard;

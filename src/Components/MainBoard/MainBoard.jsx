import { Suspense, useState } from "react";
import AcutionProducts from "./acutionProducts";
import Favorite from "../../Favorite/Favorite";
import toast from "react-hot-toast";
import AuctionHeading from "../Auction Heading/AuctionHeading";

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

  const handleAuctionData = (itemToAdd, price) => {
    // Check if the item is already in favorites
    const isAlreadyFavorite = auctionData.some(
      (item) => item.id === itemToAdd.id
    );

    if (isAlreadyFavorite) {
      toast.error("This item is already in your favorites!");
    } else {
      setAuctionData((prev) => [...prev, itemToAdd]);
      setTotalPrice((prev) => prev + price);
      toast.success("Successfully added to favorites!");
    }
  };

  // handle delete
  const handleDelete = (id, price) => {
    const updatedAuctionData = auctionData.filter((item) => item.id !== id);
    setAuctionData(updatedAuctionData);
    // Ensure price doesn't go negative
    setTotalPrice((prev) => Math.max(0, prev - price));
    toast.success("Successfully removed from favorites list!");
  };
  return (
    <div>
      <div className="container mx-auto pt-12">
        <AuctionHeading />
      </div>
      <div className="container mx-auto py-12 grid grid-cols-4 gap-4 justify-center ">
        <div className=" bg-white rounded-2xl p-5 col-span-3">
          <div className="overflow-x-auto">
            <Suspense
              fallback={
                <span className="loading loading-bars loading-xl "></span>
              }
            >
              <AcutionProducts
                auctionProducts={auctionProducts}
                handleAuctionData={handleAuctionData}
                favoriteItems={auctionData}
              />
            </Suspense>
          </div>
        </div>
        <div className="col-span-1 ">
          <Favorite
            auctionData={auctionData}
            totalPrice={totalPrice}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBoard;

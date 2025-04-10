import { MdOutlineFavoriteBorder } from "react-icons/md";
<MdOutlineFavoriteBorder />;
const Favorite = ({ auctionData, totalPrice, handleDelete }) => {
  console.log(auctionData);
  return (
    <div className="bg-white rounded-2xl p-5 text-center">
      <h1 className="flex justify-center items-center gap-3 text-xl font-semibold ">
        <MdOutlineFavoriteBorder />
        Favorite Items
      </h1>

      <div>
        {auctionData.length === 0 && (
          <div>
            <h2 className="py-6 text-center text-lg">No favorites yet </h2>
            <p className="text-sm w-2/3 mx-auto text-center pb-3">
              Click the heart icon on any item to add it to your favorites
            </p>
          </div>
        )}
        {auctionData.map((data) => (
          <div key={data.id}>
            <div className="flex gap-3 justify-between items-center py-2 border-b border-gray-300">
              <img
                className="rounded-xl w-10 h-10"
                width={80}
                height={80}
                src={data.image}
                alt=""
              />
              <p className="text-left font-semibold py-2  ">{data.title}</p>
              <button
                onClick={() => handleDelete(data.id, data.currentBidPrice)}
                className="text-red-600 font-semibold py-2 cursor-pointer hover:text-red-800 hover:bg-gray-300 rounded-full px-3"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-xl font-semibold border-t pt-3 border-gray-300">
        <h2>Total bids Amount:</h2>
        <h2>{totalPrice}$</h2>
      </div>
    </div>
  );
};

export default Favorite;

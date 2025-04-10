import { use } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const AcutionProducts = ({
  auctionProducts,
  handleAuctionData,
  favoriteItems,
}) => {
  const auctionData = use(auctionProducts);

  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Items</th>
          <th>Current Bid</th>
          <th>Time Left</th>
          <th>Bid Now</th>
        </tr>
      </thead>
      {auctionData.map((data) => {
        const isFavorite = favoriteItems.some((item) => item.id === data.id);

        return (
          <tbody key={data.id}>
            <tr>
              <td>
                <div className="flex items-center gap-3 text-lg">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={data.image} alt={data.title} />
                    </div>
                  </div>
                  <p className="text-center ">{data.title}</p>
                </div>
              </td>
              <td className="text-lg">{data.currentBidPrice}$</td>
              <td className="text-lg">{data.timeLeft}</td>
              <th>
                <button
                  onClick={() => handleAuctionData(data, data.currentBidPrice)}
                  className={`cursor-pointer text-xl ${
                    isFavorite
                      ? "text-red-600"
                      : "text-gray-500 hover:text-red-600"
                  }`}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  {isFavorite ? (
                    <MdFavorite className="cursor-not-allowed" />
                  ) : (
                    <MdFavoriteBorder />
                  )}
                </button>
              </th>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default AcutionProducts;

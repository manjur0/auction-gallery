import { use } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const AcutionProducts = ({ auctionProducts }) => {
  const auctionData = use(auctionProducts);
  console.log(auctionData);
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
      {auctionData.map((data) => (
        <tbody key={data.id}>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={data.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <p className="text-center ">{data.title}</p>
                <div>
                  <div className="font-bold"></div>
                </div>
              </div>
            </td>
            <td>{data.currentBidPrice}$</td>
            <td>{data.timeLeft}</td>
            <th>
              <button className="cursor-pointer text-red-700 ">
                <MdFavoriteBorder />
              </button>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default AcutionProducts;

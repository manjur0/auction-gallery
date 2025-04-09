import { MdOutlineFavoriteBorder } from "react-icons/md";
<MdOutlineFavoriteBorder />;
const Favorite = () => {
  return (
    <div className="bg-white rounded-2xl p-5 text-center">
      <h1 className="flex justify-center items-center gap-3 text-xl font-semibold ">
        <MdOutlineFavoriteBorder />
        Favorite Items
      </h1>

      <div>
        <h2 className="py-6 text-center text-lg">No favorites yet</h2>
        <p className="text-sm w-2/3 mx-auto text-center pb-3">
          Click the heart icon on any item to add it to your favorites
        </p>
      </div>
      <div className="flex justify-between items-center text-xl font-semibold border-t pt-3 border-gray-300">
        <h2>Total bids Amount:</h2>
        <h2>$0000</h2>
      </div>
    </div>
  );
};

export default Favorite;

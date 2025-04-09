import bgimage from "../../assets/Banner-min.jpg";
const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="container  mx-auto flex  bg-transparent text-white ">
        <div className="hero-content ">
          <div>
            <h1 className="text-6xl font-semibold w-3/5">
              Bid on Unique Items from Around the World
            </h1>
            <p className="py-8 text-3xl font-light w-3/5">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="btn btn-primary rounded-full bg-white text-black font-semibold text-lg">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

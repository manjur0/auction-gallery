import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MainBoard from "./Components/MainBoard/MainBoard";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-[#C8D4E9]">
        <MainBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;

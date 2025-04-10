import { useState } from "react";
import SlideNT from "../slide/BSA/SlideNT"
import SlideBTT from "../slide/BSA/SlideBTT"
import SlideBSA from "../slide/BSA/SlideBSA"


const BSA = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${toggleState === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => toggleTab(1)}
        >
          Nguyễn Trãi Hà Đông
        </button>
        <button
          className={`px-4 py-2 rounded ${toggleState === 2 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
          onClick={() => toggleTab(2)}
        >
          Bật Tanh Tách
        </button>
        <button
          className={`px-4 py-2 rounded ${toggleState === 3 ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
          onClick={() => toggleTab(3)}
        >
          BSA
        </button>
      </div>

      <div className="container mx-auto">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl font-bold font-heading text-center  text-blue-600">Nguyễn Trãi - Hà Đông</h2>

          <SlideNT />
        </div>

        <div className={toggleState === 2 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center  text-blue-600">Bật Tanh Tách</h2>
          <SlideBTT />
        </div>

        <div className={toggleState === 3 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center  text-blue-600">BSA - Hội sinh viên Bắc Giang tại Hà Nội</h2>
          <SlideBSA />
        </div>
      </div>
    </div>
  );
};

export default BSA;

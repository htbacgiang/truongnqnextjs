import { useState } from "react";
import SlideBus06 from "../slide/BusHN/SlideBus06"
import SlideBusHN from "../slide/BusHN/SlideBusHN"


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
          Thợ săn ảnh xe bus 06
        </button>
        <button
          className={`px-4 py-2 rounded ${toggleState === 2 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
          onClick={() => toggleTab(2)}
        >
          Xe bus Hà Nội
       
        </button>
  
      </div>

      <div className="container mx-auto">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl font-bold font-heading text-center  text-blue-600"> Thợ săn ảnh xe bus 06
          </h2>

          <SlideBus06 />
        </div>

        <div className={toggleState === 2 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center  text-blue-600"> Xe bus Hà Nội
          </h2>
          <SlideBusHN />
        </div>
      </div>
    </div>
  );
};

export default BSA;

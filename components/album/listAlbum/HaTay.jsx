import { useState } from "react";
import SlideHT from "../slide/HaTay/SlideHT"


const HaTay = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>

      <div className="container mx-auto">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center uppercase text-green-600">
         Hà Tây quê lụa
            </h2>
          <SlideHT />
        </div>
      </div>
    </div>
  );
};

export default HaTay;

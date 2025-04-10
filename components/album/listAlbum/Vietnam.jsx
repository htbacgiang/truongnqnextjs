import { useState } from "react";
import SlideVN from "../slide/Vietnam/SlideVN"


const Vietnam = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>

      <div className="container mx-auto">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center uppercase text-pink-600">
          Việt Nam quê hương tôi
            </h2>
          <SlideVN />
        </div>
      </div>
    </div>
  );
};

export default Vietnam;

import { useState } from "react";
import SlideNhatBan from "../slide/NhatBan/SlideNhatBan"


const HaTay = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>

      <div className="container mx-auto">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center uppercase text-pink-600">
        Nhật Bản đến và yêu
            </h2>
          <SlideNhatBan />
        </div>
      </div>
    </div>
  );
};

export default HaTay;

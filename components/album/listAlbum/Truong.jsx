import { useState } from "react";
import SlideTruong from "../slide/Truong/SlideTruong"
import SlideHoa from "../slide/Truong/SlideHoa"
import SlideHung from "../slide/Truong/SlideHung"

const Truong = () => {
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
                    Trường & Friends
                </button>
            
                <button
                    className={`px-4 py-2 rounded ${toggleState === 3 ? 'bg-green-700 text-white' : 'bg-gray-300'}`}
                    onClick={() => toggleTab(3)}
                >
                    Chị Hoa
                </button>
                <button
                    className={`px-4 py-2 rounded ${toggleState === 4 ? 'bg-orange-600 text-white' : 'bg-gray-300'}`}
                    onClick={() => toggleTab(4)}
                >
                    Phạm Quốc Hưng
                </button>
            </div>

            <div className="container mx-auto">
                <div className={toggleState === 1 ? "block" : "hidden"}>
                    <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center  text-blue-600">Trường & Những người bạn</h2>

                    <SlideTruong />
                </div>
                <div className={toggleState === 3 ? "block" : "hidden"}>
                    <h2 className="md:text-4xl text-2xl  font-bold font-heading text-center  text-green-600">Bà chị ngân hàng</h2>
                    <SlideHoa />
                </div>
                <div className={toggleState === 4 ? "block" : "hidden"}>
                    <h2 className="md:text-4xl text-2xl font-bold font-heading text-center  text-orange-600">Phạm Quốc Hưng - Hưng Sony A72</h2>
                    <SlideHung />
                </div>
            </div>
        </div>
    );
};

export default Truong;

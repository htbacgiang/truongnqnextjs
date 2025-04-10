import Link from "next/link";
import Error from "../public/404.png";
import Image from "next/image";
import Navbar from "../components/header/Navbar";

import {
  FacebookIcon,
} from "next-share";

const NotFound = () => {
  return (
    <div id="notfound" className="">
      <Navbar />
      <div className="notfound mt-[300px] sm:mt-[370px]">
        <div className="">
        </div>
        <h2>Oops! Không tìm thấy trang</h2>
        <p>
          Click vào đây để: <Link href="/">Quay lại trang chủ</Link>
        </p>
      
      </div>
    </div>
  );
};

export default NotFound;
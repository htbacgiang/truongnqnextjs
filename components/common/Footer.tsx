import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [location, setLocation] = useState({
    province: "Đang tải...",
    district: "Đang tải...",
    country: "Đang tải...",
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Bước 1: Lấy tọa độ từ ipregistry
        const ipResponse = await fetch(
          `https://api.ipregistry.co/?key=ira_xkvZiz13aqw5LrXR71As4H7kcyIhwA3NFOsB`
        );
        const ipData = await ipResponse.json();

        const latitude = ipData.location.latitude;
        const longitude = ipData.location.longitude;

        // Bước 2: Lấy thông tin chi tiết từ Nominatim
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
        );
        const geoData = await geoResponse.json();

        const address = geoData.address || {};
        setLocation({
          province: address.state || address.city || address.town || "",
          district: address.county || address.district ,
          country: address.country || "Không xác định",
        });
      } catch (error) {
        setLocation({
          province: "Lỗi",
          district: "Lỗi",
          country: "Lỗi",
        });
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#f9f9f9] pt-10 pb-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:pl-1 pl-5">
          {/* Cột Logo và địa chỉ */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image
                src="/logotruongnqvn.png"
                alt="Trường NQ Web Logo"
                width={150}
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-base text-gray-600 mb-4">
              Chúng tôi không chỉ xây dựng website “cho đẹp”, mà tạo ra một công cụ bán hàng và truyền thông thực thụ cho doanh nghiệp, cá nhân và thương hiệu cá nhân
            </p>
            <p className="text-base text-gray-600 mb-2 font-semibold">
              📍 Trầm Lộng, Ứng Hòa, Hà Nội
            </p>
            <p className="text-sbasem text-gray-600 mb-2 font-semibold">
              📞 0866.572.271
            </p>
            <p className="text-base text-gray-600 font-semibold">
              📧 truong@truongnq.vn
            </p>
          </div>

          {/* Cột Company */}
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4 cursor-pointer">
              Về chúng tôi
            </h4>
            <ul className="text-base text-gray-600 space-y-2 font-semibold">
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <Link href="/gioi-thieu">Về Trường NQ Web</Link>
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <Link href="/bai-viet">Blog công nghệ</Link>
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
              <Link href="/lien-he"> Địa chỉ Maps</Link>
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                Tuyển Dụng
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          {/* Cột Services */}
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4">Hỗ trợ khách hàng</h4>
            <ul className="text-base text-gray-600 space-y-2 font-semibold">
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                Hướng dẫn đặt hàng
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                Chính sách bảo mật
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                Chính sách bảo hành
              </li>
              <li className="hover:text-green-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                Chính sách giao hàng
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col md:items-start space-y-4">
            <h4 className="text-lg font-semibold">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/www.truongnq.vn" target="_blank">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={50}
                  height={50}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link href="https://www.youtube.com/@ngoquangtruong4668" target="_blank">
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={50}
                  height={50}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link href="https://www.tiktok.com/@truongtl27.ht" target="_blank">
                <Image
                  src="/tiktok.png"
                  alt="TikTok"
                  width={50}
                  height={50}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link href="https://instagram.com/truongtl27.ht" target="_blank">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bản quyền */}
        <div className="flex text-base justify-center items-center text-gray-600 gap-3 flex-wrap mt-6">
          <p>© 2025 truongnq.vn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
import Image from "next/image";
import { useState } from "react"; // Thêm useState
import { AiOutlineClose } from "react-icons/ai"; // Thêm icon đóng
import ContactForm from "./ContactForm"; // Giả sử bạn đã có ContactForm

const DeviceShowcase = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false); // Trạng thái cho popup

  const toggleContactPopup = () => {
    setContactPopupOpen(!contactPopupOpen); // Hàm bật/tắt popup
  };

  return (
    <div className="relative to-white flex items-center justify-center">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between px-10 mt-20 md:mt-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-black text-center md:text-left md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">THIẾT KẾ WEBSITE </h2>
          <p className="text-lg md:text-lg mb-6 uppercase font-semibold">
            Công nghệ & Marketing Bền Vững – Nâng Tầm Thương Hiệu
          </p>
          <button
            onClick={toggleContactPopup} // Thêm sự kiện onClick
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Tư vấn miễn phí
          </button>
        </div>

        {/* Devices Section */}
        <div className="relative md:w-1/2 h-[300px] md:h-[600px] mx-auto md:mx-0 pl-4 w-full">
          <div className="absolute top-[50px] left-1/2 -translate-x-1/2 hover:-translate-y-2 transition-transform duration-300">
            <Image
              src="/images/desktop.png"
              alt="Desktop"
              width={800}
              height={600}
              className="w-[400px] md:w-[800px]"
              style={{ maxWidth: "none" }}
            />
          </div>
          <div className="absolute bottom-[-20px] left-[-40px] md:left-[-80px] hover:-translate-y-2 transition-transform duration-300">
            <Image
              src="/images/laptop.png"
              alt="Laptop"
              width={400}
              height={250}
              className="w-[200px] md:w-[400px]"
            />
          </div>
          <div className="absolute bottom-[-20px] right-[80px] md:right-[120px] hover:-translate-y-2 transition-transform duration-300">
            <Image
              src="/images/phone.png"
              alt="Smartphone"
              width={120}
              height={240}
              className="w-[60px] md:w-[120px]"
            />
          </div>
          <div className="absolute bottom-[-20px] right-[-20px] md:right-[-60px] hover:-translate-y-2 transition-transform duration-300">
            <Image
              src="/images/tadlet.png"
              alt="Tablet"
              width={200}
              height={350}
              className="w-[100px] md:w-[200px]"
            />
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      {contactPopupOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={toggleContactPopup} // Đóng khi click bên ngoài
        >
          <div
            className="bg-white rounded-2xl shadow-lg max-w-5xl w-full mx-4 animate-slide-up"
            onClick={(e) => e.stopPropagation()} // Ngăn đóng khi click bên trong
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-pink-500 uppercase text-center w-full">
                Đăng ký nhận tư vấn website miễn phí
              </h3>
              <AiOutlineClose
                className="cursor-pointer"
                size={25}
                onClick={toggleContactPopup}
              />
            </div>
            <div className="p-8">
              <ContactForm /> {/* Gọi ContactForm */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceShowcase;
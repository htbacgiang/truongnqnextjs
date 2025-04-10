import React from "react";

const AboutUsSection = () => {
  return (
    <section
      className="relative bg-gray-100 py-12 overflow-hidden"
      style={{
        backgroundImage: `url('/images/background-pattern.jpg')`, // Đường dẫn đến ảnh họa tiết
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8, // Độ mờ để giữ họa tiết chìm
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="container mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h3 className="md:text-3xl text-2xl md:mt-2 mt-4 font-semibold text-pink-500 uppercase tracking-wide mb-2 text-center">
            Về chúng tôi
          </h3>
          <h2 className="md:text-3xl text-xl font-bold text-gray-900">
            TrườngNQ Web - Chuyên thiết kế Web & Tối ưu SEO
          </h2>
          <p className="text-gray-600 mt-4 text-center md:text-left">
            TrườngNQ Web chuyên cung cấp dịch vụ thiết kế website theo yêu cầu, bao gồm code tay, WordPress và Ladipage. Chúng tôi mang đến các website đẹp mắt, mạnh mẽ và dễ tùy chỉnh. Ngoài ra, với giải pháp SEO hiệu quả, chúng tôi giúp website lên top Google, giảm phụ thuộc vào quảng cáo và tiết kiệm chi phí dài hạn.
          </p>
          <div className="flex items-center mt-6 space-x-4 justify-center md:justify-start">
            <div className="flex items-center">


            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 bg-pink-600 text-white py-2 px-6 rounded hover:bg-green-700">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col space-y-4">
              <div className="bg-green-700 p-4 shadow-md rounded-tl-2xl rounded-br-2xl">
                <blockquote className="text-white italic">
                  Chúng tôi mang đến những giải pháp tối ưu cho website của bạn.
                </blockquote>
              </div>
              <img
                src="/images/lap-trinh-web.jpg"

                alt="Người làm nông"
                className="rounded-lg shadow w-full object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="relative">
              <img
                src="/images/lap-trinh-web-2.jpg"
                alt="Nông dân làm việc"
                className="rounded-lg shadow w-full object-cover"
              />
            </div>
          </div>

          {/* 100% Organic Logo */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img
              src="/images/check-icon.png" // Cập nhật đường dẫn logo sau khi có
              alt="Logo"
              className="md:w-32 md:h-32 h-20 w-20 object-contain opacity-80 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

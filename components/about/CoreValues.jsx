import React from "react";

const CoreValues = () => {
  const values = [
    {
      number: "1",
      title: "Chuyên nghiệp",
      details: [
        "Mang đến dịch vụ thiết kế website và marketing số chất lượng cao, đảm bảo uy tín cho thương hiệu của bạn."
      ],
    },
    {
      number: "2",
      title: "Sáng tạo",
      details: [
        "Tận dụng ý tưởng đột phá để tạo ra giao diện ấn tượng và độc đáo, giúp thương hiệu nổi bật."
      ],
    },
    {
      number: "3",
      title: "Tối ưu chuyển đổi",
      details: [
        "Xây dựng nền tảng website tối ưu trải nghiệm người dùng, tăng tỷ lệ chuyển đổi và doanh số bán hàng."
      ],
    },
    {
      number: "4",
      title: "Tích hợp công nghệ tiên tiến",
      details: [
        "Áp dụng các công nghệ mới nhất trong thiết kế và SEO để đảm bảo hiệu quả tối ưu cho website."
      ],
    },
    {
      number: "5",
      title: "Đồng hành cùng khách hàng",
      details: [
        "Luôn lắng nghe và đồng hành cùng khách hàng, cá nhân hóa giải pháp phù hợp với mục tiêu phát triển."
      ],
    },
    {
      number: "6",
      title: "Cam kết chất lượng",
      details: [
        "Chúng tôi đặt chất lượng dịch vụ lên hàng đầu, từ khâu tư vấn đến triển khai và hỗ trợ sau bán hàng."
      ],
    },
    {
      number: "7",
      title: "Phát triển bền vững",
      details: [
        "Giúp doanh nghiệp xây dựng nền tảng online lâu dài, không phụ thuộc hoàn toàn vào quảng cáo trả phí."
      ],
    },
    {
      number: "8",
      title: "Đổi mới liên tục",
      details: [
        "Luôn cập nhật xu hướng công nghệ và marketing, không ngừng cải tiến để mang lại giải pháp đột phá."
      ],
    },
  ];

  return (
    <div
      className="relative text-white py-12 px-6 mb-5"
      style={{
        backgroundImage: "url('/images/loi-ich-cua-website.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTopLeftRadius: "5rem",
        borderBottomRightRadius: "5rem",
        borderBottomLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
      }}
    >
      {/* Lớp phủ mờ */}
      <div
        className="absolute inset-0 bg-blue-700 opacity-95 rounded-2xl"
        style={{
          borderTopLeftRadius: "5rem",
          borderBottomRightRadius: "5rem",
          borderBottomLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">8 lợi ích khi sở hữu website</h2>
        <p className="mb-5 text-base">
          Trường NQ Web cam kết cung cấp giải pháp thiết kế website, SEO tổng thể, và quảng cáo Google Ads chuyên nghiệp, đồng hành cùng doanh nghiệp trên hành trình xây dựng thương hiệu số bền vững.
        </p>
        <div className="grid grid-cols-1 gap-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Số thứ tự */}
              <div className="flex-shrink-0 bg-orange-400 text-white text-xl font-bold w-10 h-10 rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-md">
                {value.number}
              </div>
              {/* Nội dung */}
              <div className="flex flex-col items-start ml-2 text-left text-white text-sm md:flex-row p-2 md:items-center">
                <h3 className="font-bold md:mr-2">{value.title}: </h3>
                <span className="text-white text-base">{value.details[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

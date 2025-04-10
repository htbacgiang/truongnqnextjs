import React from "react";

const SEOValues = () => {
    const values = [
        {
          number: "1",
          title: "Tăng Lượng Truy Cập Tự Nhiên",
          details: [
            "SEO giúp website của bạn xuất hiện ở vị trí cao trên các công cụ tìm kiếm, từ đó thu hút nhiều lượt truy cập tự nhiên từ người dùng đang tìm kiếm thông tin liên quan."
          ],
        },
        {
          number: "2",
          title: "Cải Thiện Thứ Hạng Website",
          details: [
            "Chiến lược SEO hiệu quả giúp website của bạn được xếp hạng tốt trên các công cụ tìm kiếm, nâng cao khả năng hiển thị và tiếp cận khách hàng mục tiêu."
          ],
        },
        {
          number: "3",
          title: "Tiết Kiệm Chi Phí Quảng Cáo",
          details: [
            "So với quảng cáo trả tiền, SEO là hình thức đầu tư lâu dài với chi phí thấp hơn, mang lại hiệu quả kinh doanh bền vững qua thời gian."
          ],
        },
        {
          number: "4",
          title: "Xây Dựng Niềm Tin Và Uy Tín",
          details: [
            "Việc xuất hiện ở vị trí đầu tiên trên kết quả tìm kiếm giúp người dùng tin tưởng hơn vào thương hiệu của bạn."
          ],
        },
        {
          number: "5",
          title: "Tối Ưu Trải Nghiệm Người Dùng",
          details: [
            "SEO không chỉ tập trung vào từ khóa mà còn cải thiện cấu trúc website, tốc độ tải trang và chất lượng nội dung, mang lại trải nghiệm mượt mà cho người dùng."
          ],
        },
        {
          number: "6",
          title: "Hiệu Quả Lâu Dài",
          details: [
            "Đầu tư vào SEO giúp website của bạn duy trì lưu lượng truy cập ổn định và có hiệu quả kinh doanh bền vững theo thời gian."
          ],
        },
        {
          number: "7",
          title: "Phân Tích Và Đo Lường Chính Xác",
          details: [
            "Các công cụ SEO cho phép bạn theo dõi, phân tích và đánh giá hiệu quả chiến lược qua các chỉ số quan trọng."
          ],
        },
        {
          number: "8",
          title: "Hỗ Trợ Chiến Lược Nội Dung",
          details: [
            "SEO thúc đẩy việc tạo ra nội dung chất lượng, hữu ích và cập nhật, giúp thu hút khách hàng mục tiêu hiệu quả."
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
        className="absolute inset-0 bg-green-700 opacity-95 rounded-2xl"
        style={{
          borderTopLeftRadius: "5rem",
          borderBottomRightRadius: "5rem",
          borderBottomLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">8 lợi ích khi làm SEO</h2>
        <p className="mb-5 text-base">
          Trường NQ Web cam kết cung cấp giải pháp thiết kế website, SEO tổng thể, và quảng cáo Google Ads chuyên nghiệp, đồng hành cùng doanh nghiệp trên hành trình xây dựng thương hiệu số bền vững.
        </p>
        <div className="grid grid-cols-1 gap-2">
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

export default SEOValues;

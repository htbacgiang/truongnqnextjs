// components/WorkProcess.jsx
import React from "react";
import useInView from "../../hooks/useInView";

const stepsData = [
  {
    step: "01",
    title: "Thu thập yêu cầu",
    description:
      "Chúng tôi lắng nghe và ghi nhận mọi yêu cầu, mục tiêu kinh doanh của khách hàng để đề xuất giải pháp phù hợp.",
    color: "bg-orange-500",
  },
  {
    step: "02",
    title: "Phân tích & tư vấn",
    description:
      "Phân tích thị trường, đối thủ và khách hàng mục tiêu. Tư vấn chiến lược thiết kế website, SEO, Ads, v.v.",
    color: "bg-teal-500",
  },
  {
    step: "03",
    title: "Thiết kế & phát triển",
    description:
      "Tiến hành thiết kế giao diện, lập trình chức năng, tích hợp các giải pháp marketing theo yêu cầu.",
    color: "bg-blue-500",
  },
  {
    step: "04",
    title: "Kiểm thử & hoàn thiện",
    description:
      "Kiểm tra chất lượng, tối ưu hiệu suất, khắc phục lỗi và hoàn thiện sản phẩm trước khi bàn giao.",
    color: "bg-red-500",
  },
  {
    step: "05",
    title: "Bàn giao & hỗ trợ",
    description:
      "Bàn giao website/chiến dịch. Hướng dẫn sử dụng và tiếp tục hỗ trợ, bảo trì, phát triển lâu dài.",
    color: "bg-green-500",
  },
];

// Create a separate Step component to handle each individual step
const Step = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const [ref, inView] = useInView({ threshold: 0.1 });
  const delay = index * 0.2;

  return (
    <div
      ref={ref}
      className={`
        flex items-center w-full
        ${isLeft ? "justify-start" : "justify-end"}
        transform transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <div
        className="relative w-full md:w-5/12 p-4 bg-white shadow-md rounded-lg"
        style={{
          marginLeft: isLeft ? "0" : "auto",
          marginRight: isLeft ? "auto" : "0",
        }}
      >
        <span
          className={`absolute -left-10 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-lg ${item.color}
            ${isLeft ? "md:-left-10" : "md:-right-10"}
          `}
          style={{
            left: isLeft ? "-2.5rem" : "auto",
            right: isLeft ? "auto" : "-2.5rem",
          }}
        >
          {item.step}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

const WorkProcess = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-16 md:px-5">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Quy trình làm việc của Trường NQ Web
        </h2>

        {/* Timeline chính */}
        <div className="relative">
          {/* Đường dọc ở giữa */}
          <div className="absolute left-1/2 top-0 h-full border-r-2 border-dashed border-gray-300 transform -translate-x-1/2" />

          {/* Danh sách các bước */}
          <div className="space-y-8">
            {stepsData.map((item, index) => (
              <Step key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
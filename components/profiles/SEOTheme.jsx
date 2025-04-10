import Image from "next/image";

const SeoTheme = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-teal-900 pt-16 px-4 flex flex-col items-center">
      {/* Tiêu đề */}
      <h2 className="md:text-5xl text-3xl font-bold mb-6 mt-8">Dịch vụ SEO chuyên nghiệp</h2>

      {/* Mô tả */}
      <p className="text-lg text-center max-w-4xl mb-6">
        Chúng tôi cung cấp dịch vụ SEO giúp giảm bớt phụ thuộc vào quảng cáo, tối ưu hóa website của bạn đạt thứ hạng cao trên các công cụ tìm kiếm, tăng lưu lượng truy cập và chuyển đổi khách hàng.
      </p>

      {/* Call to Action */}
      <p className="text-xl font-semibold mb-6">
        Hãy bắt đầu <span className="text-teal-400">SEO NGAY HÔM NAY!</span>
      </p>

      {/* Hình ảnh minh họa */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Mobile Image bên trái */}
        <div className="flex-shrink-0 animate-float hidden md:flex">
          <Image
            src="/images/seo-2.jpg"
            alt="Mobile Image Left"
            width={200}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Desktop Image ở giữa (lớn hơn) */}
        <div className="flex-shrink-0 animate-float">
          <Image
            src="/images/seo-theo-yeu-cau.webp"
            alt="Desktop Image"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Mobile Image bên phải */}
        <div className="flex-shrink-0 animate-float hidden md:flex">
          <Image
            src="/images/seo.jpg"
            alt="Mobile Image Right"
            width={200}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* CSS Animation sử dụng styled-jsx */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SeoTheme;

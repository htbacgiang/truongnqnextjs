import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text Content */}
          <div> 
            

            {/* Portfolio Items */}
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 border border-pink-500 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  01. Portfolio Sáng tạo
                </h3>
                <p className="text-gray-600">
                  Các chuyên gia tư vấn kinh doanh cung cấp lời khuyên chuyên môn và hướng dẫn cho các doanh nghiệp để giúp họ cải thiện hiệu suất, hiệu quả.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border border-pink-500 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  02. Portfolio Đổi mới
                </h3>
                <p className="text-gray-600">
                  Công việc của tôi được thúc đẩy bởi niềm tin rằng thiết kế sáng tạo và kế hoạch chiến lược có thể nâng tầm thương hiệu, chuyển đổi doanh nghiệp.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border border-pink-500 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  03. Dự án Nổi bật
                </h3>
                <p className="text-gray-600">
                  Trong portfolio này, bạn sẽ tìm thấy một bộ sưu tập các dự án được chọn lọc, thể hiện kỹ năng của tôi trong [Các lĩnh vực chính, ví dụ: thiết kế web responsive].
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Image with Overlapping Circles */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto z-0">
              <Image
                src="/truongnqvn.jpg" // Thay bằng đường dẫn hình ảnh của bạn
                alt="Businessman"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            {/* Decorative Circles - Adjusted to overlap the image */}
            <div className="absolute top-[-10px] right-[-10px] w-16 h-16 bg-pink-500 rounded-full opacity-50 z-10"></div>
            <div className="absolute top-[20px] right-[20px] w-8 h-8 border-2 border-pink-500 rounded-full z-10"></div>
            <div className="absolute bottom-[-10px] left-[-10px] w-16 h-16 bg-pink-500 rounded-full opacity-50 z-10"></div>
            <div className="absolute bottom-[20px] left-[20px] w-8 h-8 border-2 border-pink-500 rounded-full z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
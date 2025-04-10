import Image from 'next/image';
import Link from 'next/link';
export default function Experience() {
  return (
    <div className="md:py-12 py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Experience Details */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Kinh nghiệm
              <span className="block w-12 h-0.5 bg-gray-300 mt-2"></span>
            </h3>

            {/* Experience 1 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Giá Kệ Tân Phát <span className="text-pink-500">[2020-2024]</span>
              </h3>
              <p className="text-md font-medium text-gray-800 mb-2">
                Founder
              </p>
              <p className="text-gray-600">
                Giá kệ siêu thị Tân Phát, chuyên cung cấp kệ để hàng cho siêu thị, tạp hóa tại khu vực các tỉnh miền Bắc, mang đến giải pháp lưu trữ hiệu quả và tối ưu cho khách hàng.              </p>
            </div>

            {/* Experience 2 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Eco Bắc Giang & TruongNQ Web <span className="text-pink-500">[2025]</span>
              </h3>
              <p className="text-md font-medium text-gray-800 mb-2">
                Founder
              </p>
              <p className="text-gray-600">
                <Link href="https://ecobacgiang.vn"  // Thay thế URL này bằng URL chính xác của Mai Quốc Bình
                  className="text-pink-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"> Eco Bắc Giang </Link>
                là dự án khởi nghiệp nông nghiệp thông minh, tập trung vào phát triển thực phẩm hữu cơ theo hướng bền vững.  
                <Link href="https://truongnq.vn"  // Thay thế URL này bằng URL chính xác của Mai Quốc Bình
                  className="text-pink-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"> TruongNQ Web</Link> Web cung cấp dịch vụ thiết kế web theo yêu cầu (code tay, WordPress, LadiPage) và SEO, giúp website lên top tìm kiếm Google, giảm phụ thuộc vào quảng cáo.</p>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="relative">
            <Image
              src="/images/founder-ecobacgiang.jpg" // Thay bằng đường dẫn hình ảnh của bạn
              alt="Experience Image"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
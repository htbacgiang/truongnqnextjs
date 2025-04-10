import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DemoLadipage = () => {
  // State để theo dõi item nào đang được hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Dữ liệu cho các demo Landing Page, với hình ảnh tỷ lệ màn hình điện thoại
  const demos = [
    {
      title: "Landing Page Mỹ Phẩm ",
      image: "/images/ladipage-my-pham.webp", // Đường dẫn hình ảnh mới
      linkLight: "https://www.huluco.io.vn/mypham",
    },
    {
      title: "Landing Page Bất Động Sản",
      image: "/images/ladipage-bat-dong-san.webp", // Đường dẫn hình ảnh mới
      linkLight: "https://www.huluco.io.vn/batdongsan",
    },
    {
      title: "Landing Page Mẹ và Bé",
      image: "/images/ladipage-me-va-be.webp", // Đường dẫn hình ảnh mới
      linkLight: "https://www.huluco.io.vn/mevabe",
    },
    {
      title: "Landing Page Nông sản",
      image: "/images/ladipage-nong-san.webp", // Đường dẫn hình ảnh mới
      linkLight: "https://www.huluco.io.vn/nongsan",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nội dung đầu tiên: Header và mô tả */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Demo các mẫu Landing Page mà <span className="text-indigo-500">Trường NQ</span> đã thiết kế
          </h2>
          <p className="mt-4 text-gray-600">
            Trường NQ Web chuyên thiết kế Landing Page chuyên nghiệp, tối ưu giao diện mobile, trải nghiệm người dùng (UI/UX) và hiệu quả chuyển đổi cao.
          </p>
        </div>
        {/* Grid cho các phần demo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {demos.map((demo, index) => (
            <div key={index} className="flex flex-col">
              {/* Thumbnail với hiệu ứng hover */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={demo.image}
                  width={360} // Chiều rộng phù hợp màn hình điện thoại
                  height={640} // Chiều cao theo tỷ lệ 9:16
                  alt={`Mẫu thiết kế Landing Page - ${demo.title}`}
                  className="w-full rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                />

                {/* Nút "Xem thêm" chỉ hiển thị khi hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black/50 rounded-3xl transition-opacity duration-300">
                    <Link href={demo.linkLight} target="_blank">
                      <button className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                        Xem chi tiết
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              {/* Tiêu đề sản phẩm */}
              <h3 className="text-black text-lg font-bold mt-4 text-center">
                {demo.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoLadipage;
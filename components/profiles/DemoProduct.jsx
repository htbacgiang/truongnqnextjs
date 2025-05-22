import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DemoProduct = () => {
  // State để theo dõi item nào đang được hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Dữ liệu cho các phần demo, bạn có thể cập nhật đường dẫn hình ảnh theo mong muốn
  const demos = [
    {
      title: "Trung tâm đào tạo MC Q&K Bắc Giang",
      image: "/images/seo-mcbacgiang.png",
      linkLight: "https://mcbacgiang.com/",
    },
    {
      title: "Đồng phục thể thao UNIVISPORT",
      image: "/images/seo-unvisport.png",
      linkLight: "https://dongphucunivi.com/",
    },
    {
      title: "Eco Bắc Giang Smart Farm",
      image: "/images/eco-bacgiang.jpg",
      linkLight: "https://ecobacgiang.vn/",
    },
    {
      title: "Nội thất Greenla Home",
      image: "/images/seo-tan-truong-giang.png",
      linkLight: "https://greenlahome.vn/",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nội dung đầu tiên: Header và mô tả */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Demo các sản phẩm trang website mà <span className="text-indigo-500">Trường NQ</span> đã triển khai
          </h2>
          <p className="mt-4 text-gray-600">
          Trường NQ Web là đơn vị thiết kế website được sáng lập bởi chuyên gia công nghệ & marketing – người có tư duy kết hợp giữa giao diện đẹp, trải nghiệm người dùng tốt và hiệu quả kinh doanh rõ ràng.
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
                  width={400}
                  height={200}
                  alt={demo.title}
                  className="w-full rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                />

                {/* Nút "Xem thêm" chỉ hiển thị khi hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black/50 rounded-lg transition-opacity duration-300">
                    <Link href={demo.linkLight}
                    target="_blank"
                    >
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

export default DemoProduct;

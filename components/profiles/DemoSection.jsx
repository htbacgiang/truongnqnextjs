import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DemoSection = () => {
  // Trạng thái hover cho từng phần
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Dữ liệu cho các phần demo
  const demos = [
    {
      title: "Thiết kế Website",
      image: "/images/thiet-ke-web.webp",
      linkLight: "/thiet-ke-web",
    },
    {
      title: "Website Wordpress",
      image: "/images/wordpress.webp",
      linkLight: "/website-wordpress",
    },
    {
      title: "Dịch vụ SEO",
      image: "/images/seo-theo-yeu-cau.webp",
      linkLight: "/dich-vu-seo",
    },
    {
      title: "Thiết kế Ladipage",
      image: "/images/landing-paghe.webp",
      linkLight: "/ladipage",
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8">
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
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Mới
                </span>
                {/* Nút Dark Version và Light Version, chỉ hiện khi hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black/50 rounded-lg transition-opacity duration-300">
                    <Link href={demo.linkLight}>
                      <button className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                        Xem thêm
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              {/* Tiêu đề và mô tả */}
              <h3 className="text-black text-2xl font-bold mt-4 text-center">{demo.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
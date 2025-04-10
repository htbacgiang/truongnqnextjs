import { FC, useState } from "react";

interface Props {
  onCategorySelect: (category: string | null) => void; // Hàm xử lý khi danh mục được chọn
}

const MainCategories: FC<Props> = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // Lưu danh mục đang được chọn

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category); // Cập nhật trạng thái active
    onCategorySelect(category); // Gọi hàm callback
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-11/12 md:w-11/12 rounded-3xl xl:rounded-full p-4 shadow-lg gap-4 flex sm:flex-row flex-wrap items-center justify-center bg-gray-100 mt-5">
        <button
          onClick={() => handleCategoryClick(null)} // Tất cả bài viết
          className={`rounded-full px-4 py-2 text-sm sm:text-base transition duration-300 ${
            activeCategory === null
              ? "bg-blue-800 text-white"
              : "hover:bg-blue-50"
          }`}
        >
          Tất cả bài viết
        </button>
        <button
          onClick={() => handleCategoryClick("Thiết kế Website")}
          className={`rounded-full px-4 py-2 text-sm sm:text-base transition duration-300 ${
            activeCategory === "Thiết kế Website"
              ? "bg-blue-800 text-white"
              : "hover:bg-blue-50"
          }`}
        >
          Thiết kế Website
        </button>
        <button
          onClick={() => handleCategoryClick("SEO & Tối ưu website")}
          className={`rounded-full px-4 py-2 text-sm sm:text-base transition duration-300 ${
            activeCategory === "SEO & Tối ưu website"
              ? "bg-blue-800 text-white"
              : "hover:bg-blue-50"
          }`}
        >
          SEO & Tối ưu website
        </button>
        <button
          onClick={() => handleCategoryClick("Marketing bền vững")}
          className={`rounded-full px-4 py-2 text-sm sm:text-base transition duration-300 ${
            activeCategory === "Marketing bền vững"
              ? "bg-blue-800 text-white"
              : "hover:bg-blue-50"
          }`}
        >
          Marketing bền vững
        </button>
        <button
          onClick={() => handleCategoryClick("Chuyện của Trường")}
          className={`rounded-full px-4 py-2 text-sm sm:text-base transition duration-300 ${
            activeCategory === "Chuyện của Trường"
              ? "bg-blue-800 text-white"
              : "hover:bg-blue-50"
          }`}
        >
          Chuyện của Trường
        </button>
      </div>
    </div>
  );
};

export default MainCategories;
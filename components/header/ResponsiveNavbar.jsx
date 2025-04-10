import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaRegUser, FaHeart, FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaChevronUp,FaAngleDown  } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../public/logotruongnqvn.png";

const ResponsiveMenu = ({ isOpen, toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    { name: "Trang chủ", link: "/" },
    { name: "Về TrườngNQ", link: "/gioi-thieu" },
    { name: "Bài viết", link: "/bai-viet" },
    {
      name: "Dịch vụ",
      dropdown: [
        { name: "Thiết kế web", link: "/thiet-ke-web" },
        { name: "Website Wordpress", link: "/wordpress" },
        { name: "Dịch vụ SEO", link: "/dich-vu-seo" },
        { name: "LadiPage", link: "/ladipage" },


      ],
    },
    { name: "Album ảnh", link: "/album" },

    { name: "Liên hệ", link: "/lien-he" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full max-h-full overflow-y-auto bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 ">
          <Image src={logo} alt="Logo" width={150} height={70} />
          <AiOutlineClose
            size={25}
            className="cursor-pointer text-gray-700"
            onClick={toggleMenu}
          />
        </div>

        {/* Search */}
        <div className="mb-4 px-4">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Menu Items */}
        <ul className="space-y-4 px-4 border-b border-gray-300 pb-4 uppercase">
          {menuItems.map((item, index) => (
            <li key={index}>
              {!item.dropdown ? (
                <Link href={item.link} className="text-lg font-medium hover:text-green-600">
                  {item.name}
                </Link>
              ) : (
                <>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                    role="button"
                    aria-expanded={activeDropdown === index}
                  >
                    <span className="text-lg font-medium hover:text-green-600">
                      {item.name}
                    </span>
                    <span className="text-lg">
                      {activeDropdown === index ? (
                        <FaChevronUp size={20} />
                      ) : (
                        <FaAngleDown  size={20} />
                      )}
                    </span>
                  </div>
                  <ul
                    className={`pl-4 mt-2 ${
                      activeDropdown === index ? "max-h-96" : "max-h-0"
                    } overflow-hidden transition-all duration-300`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.link}
                          className="block py-1 text-gray-700 hover:text-green-600"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center mt-6">
          <Link href="https://facebook.com/www.truongnq.vn" className="text-xl text-gray-600 hover:text-blue-600">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" className="text-xl text-gray-600 hover:text-blue-400">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/truongnq-vn" className="text-xl text-gray-600 hover:text-blue-700">
            <FaLinkedin />
          </Link>
          <Link href="https://instagram.com/truongtl27.ht" className="text-xl text-gray-600 hover:text-pink-600">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;

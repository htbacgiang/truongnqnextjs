import Image from "next/image";
import { useState } from "react";
import AlbumBsa from "../../components/album/listAlbum/BSA";
import AlbumTruong from "../../components/album/listAlbum/Truong";
import AlbumNB from "../../components/album/listAlbum/NhatBan";
import AlbumBusHN from "../../components/album/listAlbum/BusHN";
import AlbumVN from "../../components/album/listAlbum/Vietnam";
import AlbumHT from "../../components/album/listAlbum/HaTay";
import DefaultLayout from "../../components/layout/DefaultLayout";

const AlbumList = () => {
  const [selectedAlbum, setSelectedAlbum] = useState("Việt Nam quê hương tôi");

  const handleAlbumClick = (albumName) => {
    setSelectedAlbum(albumName);
  };

  const renderAlbumComponent = () => {
    switch (selectedAlbum) {
      case "Việt Nam quê hương tôi":
        return <AlbumVN />;
      case "Hà Tây quê lụa":
        return <AlbumHT />;
      case "Trường và Friends":
        return <AlbumTruong />;
      case "BSA":
        return <AlbumBsa />;
      case "Xe bus Hà Nội":
        return <AlbumBusHN />;
      case "Nhật Bản đến và yêu":
        return <AlbumNB />;
      default:
        return null;
    }
  };

  const albums = [
    { title: "Việt Nam quê hương tôi", image: "/blog/blogpost1.jpg" },
    { title: "Hà Tây quê lụa", image: "/blog/blogpost2.jpg" },
    { title: "Trường và Friends", image: "/blog/blogpost3.jpg" },
    { title: "BSA", image: "/blog/blogpost4.jpg" },
    { title: "Xe bus Hà Nội", image: "/blog/blogpost5.jpg" },
    { title: "Nhật Bản đến và yêu", image: "/blog/blogpost8.jpg" },
  ];

  return (
    <DefaultLayout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phần danh mục album */}
          <div className="py-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-pink-500 uppercase mb-2">
                Album ảnh
              </h3>
              <h2 className="text-2xl md:text-4xl font-bold font-heading">
                Online Albums{" "}
                <span className="text-teal-500">lưu giữ những kỷ niệm</span>
              </h2>
            </div>

            {/* Grid cho các danh mục */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-2">
              {albums.map((album, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleAlbumClick(album.title)}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 mb-3 overflow-hidden">
                    <Image
                      src={album.image}
                      width={56}
                      height={56}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-center">
                    {album.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Hiển thị component album được chọn */}
          <div className="mt-2">{renderAlbumComponent()}</div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  const meta = {
    title: "Album Ảnh - Trường NQ Web",
    description:
      "Khám phá bộ sưu tập album ảnh tuyệt đẹp tại Trường NQ Web, lưu giữ những khoảnh khắc đáng nhớ từ Việt Nam quê hương tôi, Hà Tây quê lụa, đến Nhật Bản đến và yêu.",
    keywords:
      "album ảnh, Trường NQ Web, Việt Nam quê hương tôi, Hà Tây quê lụa, Nhật Bản đến và yêu, kỷ niệm",
    robots: "index, follow",
    canonical: "https://truongnq.vn/album",
    og: {
      title: "Album Ảnh - Trường NQ Web",
      description:
        "Khám phá bộ sưu tập album ảnh tuyệt đẹp tại Trường NQ Web, lưu giữ những khoảnh khắc đáng nhớ.",
      type: "website",
      url: "https://truongnq.vn/album",
      image: "https://truongnq.vn/thumb.jpg",
      imageWidth: "1200",
      imageHeight: "630",
      siteName: "Trường NQ Web",
    },
    twitter: {
      card: "summary_large_image",
      title: "Album Ảnh - Trường NQ Web",
      description:
        "Khám phá bộ sưu tập album ảnh tuyệt đẹp tại Trường NQ Web.",
      image: "https://truongnq.vn/thumb.jpg",
    },
  };

  return {
    props: {
      meta,
    },
  };
}

export default AlbumList;
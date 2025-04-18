import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Intro from "../../components/about/Intro";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Image from "next/image";
import AboutMe from "../../components/profiles/AboutMe";
import EducationExperience from "../../components/profiles/EducationExperience";
import Experience from "../../components/profiles/Experience";

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleOverlayClick = () => {
    setIsPlaying(false);
  };

  return (
    <DefaultLayout>
      <div className="h-[80px] bg-white"></div>
      <AboutMe />
      <div className="py-6 px-6">
        <div className="container md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Phần văn bản */}
          <div>
            <p className="mb-4 text-gray-700">
              <h2 className="text-green-700 text-xl md:text-3xl font-bold mb-2">
                🎯 Tầm nhìn & Sứ mệnh
              </h2>
              <br />
              <strong>Tầm nhìn:</strong> Trở thành đơn vị thiết kế web & marketing đáng tin cậy cho các cá nhân, doanh nghiệp vừa và nhỏ tại Việt Nam, nơi bạn không cần biết công nghệ vẫn có thể phát triển mạnh mẽ trên nền tảng số.
              <br />
              <strong>Sứ mệnh:</strong> Tạo ra những website đơn giản – tinh tế – hiệu quả, giúp khách hàng xây dựng hình ảnh chuyên nghiệp và tiếp cận khách hàng mục tiêu một cách tự nhiên, bền vững.
            </p>
          </div>

          {/* Phần video - Responsive */}
          <div className="relative w-full mx-auto rounded-lg shadow-lg overflow-hidden">
            {/* Ảnh nền */}
            <Image
              src="/images/you-tube.jpg"
              alt="Dịch vụ thiết kế website và marketing của Trường NQ Web"
              layout="responsive"
              width={800}
              height={450}
              className="rounded-tl-3xl rounded-br-3xl shadow-lg border-2 border-green-500 w-full h-auto md:w-[800px] md:h-[450px]"
            />

            {/* Overlay toàn màn hình */}
            {isPlaying && (
              <div
                className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
                onClick={handleOverlayClick}
              >
                <div
                  className="relative w-full max-w-4xl aspect-video p-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/d8pdu6nQz0A?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                  <button
                    onClick={handleOverlayClick}
                    className="absolute top-2 right-2 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Nút Play - Responsive */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      w-20 h-14 md:w-28 md:h-20 bg-white rounded-lg opacity-80 flex items-center justify-center
                      shadow-lg cursor-pointer"
              >
                <FaYoutube
                  size={40}
                  className="text-red-600 transition-transform duration-300 hover:scale-110 animate-pulse md:size-65"
                />
              </button>
            )}
          </div>
        </div>
        <EducationExperience />
        <Experience />
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const meta = {
    title: "Trường NQ Web: Thiết Kế Website & Marketing Hiệu Quả",
    description:
      "Trường NQ Web - thiết kế website, SEO tổng thể, Ladipage, quảng cáo Google Ads, giải pháp bán hàng và marketing hiệu quả.",
    keywords:
      "Trường NQ Web, thiết kế website, SEO tổng thể, Ladipage, quảng cáo Google Ads, marketing online, phát triển bền vững",
    author: "Trường NQ Web",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    canonical: "https://truongnq.vn/gioi-thieu",
    og: {
      title: "Trường NQ Web: Thiết Kế Website & Marketing Hiệu Quả",
      description:
        "Trường NQ Web - thiết kế website, SEO tổng thể, Ladipage, quảng cáo Google Ads, giải pháp bán hàng và marketing hiệu quả.",
      image: "https://truongnq.vn/baner-web.jpg",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://truongnq.vn/gioi-thieu",
      type: "website",
      locale: "vi_VN",
      siteName: "Trường NQ Web",
    },
    twitter: {
      card: "summary_large_image",
      title: "Trường NQ Web: Thiết Kế Website & Marketing Hiệu Quả",
      description:
        "Trường NQ Web - thiết kế website, SEO, Ladipage, Google Ads, giải pháp marketing hiệu quả.",
      image: "https://truongnq.vn/baner-web.jpg",
    },
    favicon: "/favicon.ico",
  };

  return {
    props: {
      meta,
    },
  };
}
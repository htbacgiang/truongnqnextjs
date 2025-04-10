import Head from 'next/head';
import DeviceShowcase from '../../components/profiles/DeviceShowcase';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DemoLadipage from '../../components/profiles/DemoLadipage';
import WorkProcess from '../../components/profiles/WorkProcess';
import NQWebHero from '../../components/profiles/NQWebHero';
import Image from 'next/image';
import CoreValues from '../../components/about/CoreValues';
import SeoTheme from '../../components/profiles/SEOTheme';
import SEOValues from '../../components/profiles/SEOValues';
import MobileUIScreens from '../../components/profiles/MobileUIScreens';

export default function Home() {
    // Cấu trúc dữ liệu Schema cho trang thiết kế Landing Page
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Thiết Kế Landing Page - Mẫu Giao Diện Ứng Dụng Smartphone",
        "description": "Khám phá các mẫu thiết kế Landing Page chuyên nghiệp, tối ưu UI/UX cho ứng dụng smartphone, hỗ trợ SEO hiệu quả.",
        "url": "https://yourwebsite.com/thiet-ke-landing-page", // Thay bằng URL thực tế
        "image": "https://yourwebsite.com/images/screen5.png", // Thay bằng URL hình ảnh thực tế
    };
    return (
        <DefaultLayout>
            <div className="min-h-screen">
                <h1 className="hidden">
                    Dịch vụ SEO - Tối ưu website & Nâng cao Thương hiệu số | Trường NQ Web
                </h1>
                <Head>
                    <title>Thiết Kế Landing Page - Mẫu Giao Diện Smartphone Tối Ưu</title>
                    <meta
                        name="description"
                        content="Thiết kế Landing Page chuyên nghiệp với giao diện smartphone đẹp mắt, tối ưu SEO và trải nghiệm người dùng (UI/UX). Xem ngay các mẫu thiết kế!"
                    />
                    <meta
                        name="keywords"
                        content="thiết kế landing page, mẫu landing page, giao diện smartphone, tối ưu SEO, UI/UX design"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="Your Name or Company" />
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="canonical" href="https://yourwebsite.com/thiet-ke-landing-page" /> {/* Thay bằng URL thực tế */}

                    {/* Open Graph Meta Tags */}
                    <meta property="og:title" content="Thiết Kế Landing Page - Mẫu Giao Diện Smartphone Tối Ưu" />
                    <meta
                        property="og:description"
                        content="Khám phá các mẫu thiết kế Landing Page chuyên nghiệp, tối ưu SEO và UI/UX cho ứng dụng smartphone."
                    />
                    <meta property="og:image" content="/images/screen5.png" /> {/* Thay bằng URL hình ảnh thực tế */}
                    <meta property="og:url" content="https://yourwebsite.com/thiet-ke-landing-page" />
                    <meta property="og:type" content="website" />

                    {/* Schema Markup */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                    />
                </Head>
                {/* Phần Hero với nội dung dịch vụ SEO */}
                <MobileUIScreens />
                {/* Section giới thiệu các dịch vụ & quy trình */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <DemoLadipage />
                        <WorkProcess />
                        <NQWebHero />
                    </div>
                </section>

                {/* Call to Action - Kêu gọi liên hệ */}
                <section className="py-10 bg-blue-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">
                            Bạn đã sẵn sàng cải thiện thứ hạng website với dịch vụ SEO?
                        </h2>
                        <p className="text-lg mb-8">
                            Liên hệ với Trường NQ Web ngay hôm nay để nhận tư vấn miễn phí và giải pháp tối ưu giúp website của bạn bứt phá trên thị trường số!
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            Bắt đầu ngay
                        </button>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}

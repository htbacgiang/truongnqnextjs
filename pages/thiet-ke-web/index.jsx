import Head from 'next/head';
import DeviceShowcase from '../../components/profiles/DeviceShowcase';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DemoProduct from '../../components/profiles/DemoProduct';
import WorkProcess from '../../components/profiles/WorkProcess';
import NQWebHero from '../../components/profiles/NQWebHero';
import Image from 'next/image';
import CoreValues from '../../components/about/CoreValues';
export default function Home() {
    return (
        <DefaultLayout>
            <div className="min-h-screen">
                <h1 className="hidden">
                    Thiết kế website chuyên nghiệp, giải pháp phát triển thương hiệu số
                </h1>
                <Head>
                    <title>Thiết kế Website Chuyên Nghiệp - Trường NQ Web</title>
                    <meta
                        name="description"
                        content="Trường NQ Web - thiết kế website chuyên nghiệp, chuẩn SEO, giao diện đẹp. Giải pháp tối ưu nhận diện thương hiệu và tăng chuyển đổi cho doanh nghiệp."
                    />
                    <meta
                        name="keywords"
                        content="thiết kế website chuyên nghiệp, dịch vụ SEO, Trường NQ Web, phát triển thương hiệu số, landing page, quảng cáo Google Ads"
                    />
                    <meta name="author" content="Trường NQ Web" />
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="canonical" href="https://truongnq.vn/thiet-ke-web" />

                    {/* Thẻ Open Graph */}
                    <meta
                        property="og:title"
                        content="Thiết kế Website Chuyên Nghiệp - Trường NQ Web"
                    />
                    <meta
                        property="og:description"
                        content="Trường NQ Web - thiết kế website chuyên nghiệp, chuẩn SEO, giao diện đẹp. Giải pháp tối ưu nhận diện thương hiệu và tăng chuyển đổi cho doanh nghiệp."
                    />
                    <meta property="og:image" content="https://truongnq.vn/thumb.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:url" content="https://truongnq.vn/thiet-ke-web" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="vi_VN" />
                    <meta property="og:site_name" content="Trường NQ Web" />

                    {/* Thẻ Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Thiết kế Website Chuyên Nghiệp - Trường NQ Web"
                    />
                    <meta
                        name="twitter:description"
                        content="Trường NQ Web - thiết kế website chuyên nghiệp, chuẩn SEO, giải pháp tối ưu nhận diện thương hiệu."
                    />
                    <meta
                        name="twitter:image"
                        content="https://truongnq.vn/thumb.jpg"
                    />

                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <DeviceShowcase />
                {/* Services Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <DemoProduct />
                        <CoreValues />
                        <WorkProcess />
                        <NQWebHero />
                    </div>
                </section>
                {/* Call to Action Section */}
                <section className="py-10 bg-blue-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-xl  md:text-3xl font-bold mb-4">
                            Sẵn sàng phát triển thương hiệu của bạn?
                        </h2>
                        <p className="text-lg mb-8">
                            Liên hệ với Trường NQ Web ngay hôm nay để nhận tư vấn và giải pháp tối ưu nhất!
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            Bắt đầu ngay
                        </button>
                    </div>
                </section>

                {/* Footer */}

            </div>
        </DefaultLayout>
    );
}
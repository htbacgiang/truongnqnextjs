import Head from 'next/head';
import DeviceShowcase from '../../components/profiles/DeviceShowcase';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DemoProduct from '../../components/profiles/DemoProduct';
import WorkProcess from '../../components/profiles/WorkProcess';
import NQWebHero from '../../components/profiles/NQWebHero';
import Image from 'next/image';
import CoreValues from '../../components/about/CoreValues';
import SeoTheme from '../../components/profiles/SEOTheme';
import SEOValues from '../../components/profiles/SEOValues';

export default function Home() {
    return (
        <DefaultLayout>
            <div className="min-h-screen">
                <h1 className="hidden">
                    Trường NQ Web - Dịch vụ SEO chuyên nghiệp, Giải pháp Tối ưu Website & Thương hiệu số
                </h1>
                <Head>
                    <title>Dịch vụ SEO - Tối ưu website & Nâng cao Thương hiệu số | Trường NQ Web</title>
                    <meta 
                        name="description" 
                        content="Trường NQ Web cung cấp dịch vụ SEO chuyên nghiệp giúp website của bạn đạt thứ hạng cao trên Google, tăng lưu lượng truy cập và giảm chi phí quảng cáo. Liên hệ ngay để cải thiện hiệu quả kinh doanh và phát triển thương hiệu số!" 
                    />
                </Head>
                
                {/* Phần Hero với nội dung dịch vụ SEO */}
                <SeoTheme />

                {/* Section giới thiệu các dịch vụ & quy trình */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <DemoProduct />
                        <SEOValues />
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

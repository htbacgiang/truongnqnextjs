import DeviceShowcase from '../../components/profiles/DeviceShowcase';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DemoProduct from '../../components/profiles/DemoProduct';
import WorkProcess from '../../components/profiles/WorkProcess';
import NQWebHero from '../../components/profiles/NQWebHero';
import CoreValues from '../../components/about/CoreValues';

export default function Home() {
    return (
        <DefaultLayout>
            <div className="min-h-screen">
                <h1 className="hidden">
                    Thiết kế website chuyên nghiệp, giải pháp phát triển thương hiệu số
                </h1>
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
                        <h2 className="text-xl md:text-3xl font-bold mb-4">
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
            </div>
        </DefaultLayout>
    );
}

export async function getServerSideProps() {
    const meta = {
        title: "Thiết kế Website Chuyên Nghiệp - Trường NQ Web",
        description:
            "Trường NQ Web - thiết kế website chuyên nghiệp, chuẩn SEO, giao diện đẹp. Giải pháp tối ưu nhận diện thương hiệu và tăng chuyển đổi cho doanh nghiệp.",
        keywords:
            "thiết kế website chuyên nghiệp, dịch vụ SEO, Trường NQ Web, phát triển thương hiệu số, landing page, quảng cáo Google Ads",
        author: "Trường NQ Web",
        robots: "index, follow",
        viewport: "width=device-width, initial-scale=1.0",
        canonical: "https://truongnq.vn/thiet-ke-web",
        og: {
            title: "Thiết kế Website Chuyên Nghiệp - Trường NQ Web",
            description:
                "Trường NQ Web - thiết kế website chuyên nghiệp, chuẩn SEO, giao diện đẹp. Giải pháp tối ưu nhận diện thương hiệu và tăng chuyển đổi cho doanh nghiệp.",
            image: "https://truongnq.vn/thiet-ke-web.jpg",
            imageWidth: "1200",
            imageHeight: "630",
            url: "https://truongnq.vn/thiet-ke-web",
            type: "website",
            locale: "vi_VN",
            siteName: "Trường NQ Web",
        },
        twitter: {
            card: "summary_large_image",
            title: "Thiết kế Website Chuyên Nghiệp - Trường NQ Web",
            description:
                "Trường NQ Web - thiết kế website chuyên nghiệp, chuẩn SEO, giải pháp tối ưu nhận diện thương hiệu.",
            image: "https://truongnq.vn/thiet-ke-web.jpg",
        },
        favicon: "/favicon.ico",
    };

    return {
        props: {
            meta,
        },
    };
}
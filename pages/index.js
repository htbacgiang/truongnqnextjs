import DefaultLayout from "../components/layout/DefaultLayout";
import SubscribeSection from "../components/about/SubscribeSection";
import AboutUsSection from "../components/about/AboutUsSection";
import OrganicProcess from "../components/about/OrganicProcess";
import Banner from "../components/common/Banner";
import Gallery from "../components/fontend/common/Gallery";
import Product3 from "../components/product/Products3";
import ProductHot from "../components/product/ProductHot";
import PostCard from "../components/common/PostCard";
import { readPostsFromDb, formatPosts } from "../lib/utils";
import CardProject from "../components/profiles/CardProject";
import EducationExperience from "../components/profiles/EducationExperience";
import Experience from "../components/profiles/Experience";
import ContactForm from "../components/profiles/ContactForm";
import BlogHero from "../components/profiles/BlogHero";
import PortfolioSection from "../components/profiles/PortfolioSection";
import ProfileHero from "../components/profiles/ProfileHero";
import TestimonialSection from "../components/profiles/TestimonialSection";
import DemoSection from "../components/profiles/DemoSection";
import AlbumShowcase from "../components/album/AlbumShowcase";
import AboutMe from "../components/profiles/AboutMe";
import DeviceShowcase from "../components/profiles/DeviceShowcase";
import DemoProduct from "../components/profiles/DemoProduct";
import WorkProcess from "../components/profiles/WorkProcess";
import NQWebHero from "../components/profiles/NQWebHero";

export default function Home({ posts }) {
  // Đối tượng JSON-LD cho Structured Data (Schema.org)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trường NQ",
    "url": "https://truongnq.vn",
    "logo": "https://truongnq.vn/logotruongnqvn.png",
    "sameAs": ["https://www.facebook.com/www.truongnq.vn"],
  };

  return (
    <DefaultLayout>
      {/* H1 ẩn chỉ phục vụ SEO */}
      <h1 className="hidden">
        Trường NQ - Tất cả giải pháp liên quan đến Website
      </h1>
      {/* JSON‑LD Structured Data vẫn giữ trong trang Home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Các component của trang */}
      <Banner />
      <ProfileHero />
      <DemoSection />
      <AboutMe />
      <ContactForm />
      <AboutUsSection />
      <TestimonialSection />
      <BlogHero />
      <div className="container mx-auto p-3 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-6">
          {posts.slice(0, 8).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await readPostsFromDb(8, 0);
    const formattedPosts = formatPosts(posts);

    // Thêm dữ liệu meta vào props
    const meta = {
      title: "Trường NQ - Thiết kế Website và Dịch vụ SEO chuyên nghiệp",
      description:
        "Thiết kế website chuẩn SEO, xây dựng landing page chuyển đổi cao, tối ưu thứ hạng Google. Trường NQ đồng hành cùng doanh nghiệp trong hành trình tăng trưởng số.",
      keywords:
        "thiết kế website, landing page, dịch vụ SEO, website chuẩn SEO, web chuyên nghiệp, Trường NQ",
      robots: "index, follow",
      author: "Trường NQ",
      canonical: "https://truongnq.vn/",
      og: {
        title: "Trường NQ - Thiết kế Website & Dịch vụ SEO hàng đầu",
        description:
          "Tối ưu hóa thương hiệu online với website hiện đại và chiến lược SEO hiệu quả từ Trường NQ.",
        type: "website",
        image: "https://truongnq.vn/thumb.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://truongnq.vn",
      },
      twitter: {
        card: "summary_large_image",
        title: "Trường NQ - Giải pháp Website & SEO tối ưu",
        description:
          "Thiết kế web hiện đại, chuẩn SEO, giúp doanh nghiệp tăng trưởng vượt trội.",
        image: "https://truongnq.vn/thumb.jpg",
      },
    };

    return {
      props: {
        posts: formattedPosts,
        meta, // Truyền meta qua props
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}
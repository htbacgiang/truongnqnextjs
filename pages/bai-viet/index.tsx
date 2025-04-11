import { useState } from "react";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import PaginatedPosts from "../../components/common/PaginatedPosts";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { formatPosts, readPostsFromDb } from "../../lib/utils";
import { PostDetail } from "../../utils/types";
import Image from "next/image";
import MainCategories from "../../components/common/MainCategories";
import { trimText } from "../../utils/helper";

type MetaData = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
    url: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

type Props = {
  posts: PostDetail[];
  meta: MetaData;
};

const Blogs: NextPage<Props> = ({ posts }) => {
  const [postsToRender, setPostsToRender] = useState<PostDetail[]>(posts);
  const [filteredPosts, setFilteredPosts] = useState<PostDetail[]>(posts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const postsPerPage = 5;
  const totalPages = Math.ceil(postsToRender.length / postsPerPage);

  const formatDate = (date: string): string =>
    new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = posts.filter((post) => post.category === category);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <DefaultLayout>
      <div className="h-[80px] bg-white"></div>
      <div className="pb-12">
        <div className="flex flex-col gap-4 w-full">
          {/* Breadcrumb */}
          <div className="flex gap-2 px-4">
            <Link href="/">Trang chủ</Link>
            <span>•</span>
            <Link href="/bai-viet" className="text-blue-800">
              Bài viết & Chia Sẻ
            </Link>
          </div>

          {/* Featured Posts */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between px-4 lg:px-12">
            <div className="w-full lg:w-8/12 flex flex-col gap-2">
              {postsToRender[0]?.thumbnail && (
                <div className="aspect-video relative cursor-pointer rounded shadow-sm shadow-secondary-dark overflow-hidden">
                  <Image
                    src={postsToRender[0].thumbnail}
                    layout="fill"
                    className="object-cover hover:scale-105 transition-all ease duration-300"
                    alt={postsToRender[0].title}
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <h2 className="font-semibold lg:text-lg">01.</h2>
                <Link
                  href={`/category/${postsToRender[0]?.category}`}
                  className="text-blue-800 lg:text-lg"
                >
                  {postsToRender[0]?.category}
                </Link>
                <span className="text-gray-500">
                  {formatDate(postsToRender[0]?.createdAt)}
                </span>
              </div>
              <Link
                href={`/bai-viet/${postsToRender[0]?.slug}`}
                className="text-base sm:text-lg md:text-xl font-medium"
              >
                {postsToRender[0]?.title}
              </Link>
            </div>

            <div className="w-full lg:w-6/12 flex flex-col gap-4">
              {[1, 2, 3].map(
                (index) =>
                  postsToRender[index] && (
                    <div
                      key={index}
                      className="flex justify-between gap-4 h-auto lg:h-1/3"
                    >
                      {postsToRender[index]?.thumbnail && (
                        <div className="w-1/3 aspect-video relative cursor-pointer rounded shadow-sm shadow-secondary-dark overflow-hidden">
                          <Image
                            src={postsToRender[index].thumbnail}
                            layout="fill"
                            className="object-cover hover:scale-105 transition-all ease duration-300"
                            alt={postsToRender[index].title}
                          />
                        </div>
                      )}
                      <div className="w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-sm lg:text-base mb-1">
                          <h2 className="font-semibold">{`0${index + 1}.`}</h2>
                          <Link
                            href={`/category/${postsToRender[index]?.category}`}
                            className="text-blue-800"
                          >
                            {postsToRender[index]?.category}
                          </Link>
                          <span className="text-gray-500 text-sm">
                            {formatDate(postsToRender[index]?.createdAt)}
                          </span>
                        </div>
                        <Link
                          href={`/bai-viet/${postsToRender[index]?.slug}`}
                          className="text-base font-medium line-clamp-2"
                        >
                          {postsToRender[index]?.title}
                        </Link>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Main Categories */}
          <MainCategories onCategorySelect={handleCategorySelect} />

          {/* Recent Posts */}
          <div className="my-2 px-4 lg:px-12">
            <PaginatedPosts posts={filteredPosts} postsPerPage={postsPerPage} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: PostDetail[];
  meta: MetaData;
}> = async () => {
  try {
    const limit = 8;
    const posts = await readPostsFromDb(limit, 0);
    const formattedPosts: PostDetail[] = formatPosts(posts);

    const meta: MetaData = {
      title: "Bài viết về Thiết kế Website & SEO - Trường NQ Web",
      description:
        "Khám phá bài viết về thiết kế website, dịch vụ SEO và giải pháp số từ Trường NQ Web. Cập nhật kiến thức để phát triển doanh nghiệp của bạn.",
      keywords:
        "thiết kế website, dịch vụ SEO, Trường NQ Web, website chuẩn SEO, landing page",
      author: "Trường NQ Web",
      robots: "index, follow",
      canonical: "https://truongnq.vn/bai-viet",
      og: {
        title: "Bài viết về Thiết kế Website & SEO - Trường NQ Web",
        description:
          "Khám phá bài viết về thiết kế website, dịch vụ SEO và giải pháp số từ Trường NQ Web.",
        type: "website",
        image: "https://truongnq.vn/baner-web.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://truongnq.vn/bai-viet",
        siteName: "Trường NQ Web",
      },
      twitter: {
        card: "summary_large_image",
        title: "Bài viết về Thiết kế Website & SEO - Trường NQ Web",
        description:
          "Khám phá bài viết về thiết kế website, dịch vụ SEO và giải pháp số từ Trường NQ Web.",
        image: "https://truongnq.vn/baner-web.jpg",
      },
    };

    return {
      props: {
        posts: formattedPosts,
        meta,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Blogs;
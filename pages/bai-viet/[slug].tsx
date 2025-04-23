import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import parse from "html-react-parser";
import DefaultLayout from "../../components/layout/DefaultLayout";
import db from "../../utils/db";
import Post from "../../models/Post";
import Share from "../../components/common/Share";
import Link from "next/link";
import Image from "next/image";
import { trimText } from "../../utils/helper";
import Head from "next/head";
import AdBanner from "../../components/profiles/AdBanner";

type PostData = {
  id: string;
  title: string;
  content: string;
  meta: string;
  tags: string[];
  slug: string;
  thumbnail: string;
  createdAt: string;
  category: string;
  relatedPosts: {
    id: string;
    title: string;
    slug: string;
    category: string;
    thumbnail?: string;
  }[];
};

type MetaData = {
  title: string;
  description: string;
  author: string;
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
  post: PostData;
  meta: MetaData;
};

const host = "https://truongnq.vn/bai-viet";

export const APP_NAME = "Trường NQ Web";
const SinglePost: NextPage<Props> = ({ post }) => {
  const { title, content, meta, slug, thumbnail, category, createdAt, relatedPosts } = post;

  return (
    <DefaultLayout>
      <div className="container mx-auto px-5 py-8 md:flex md:space-x-8">
        <div className="col-12 col-md-10 mb-4 mb-md-0">
          <div className="md:pb-20 pb-6 container mx-auto mt-[60px] sm:mt-[91px]">
            {/* Breadcrumb */}
            <div className="flex font-semibold gap-2 text-base text-gray-600">
              <Link href="/bai-viet" className="hover:text-blue-800 whitespace-nowrap">
                Bài viết
              </Link>
              <span>›</span>
              <span className="flex font-semibold gap-2 mb-4 text-base text-gray-600">
                {trimText(title, 35)}
              </span>
            </div>

            {/* Tiêu đề bài viết */}
            <h1 className="md:text-3xl text-xl font-bold text-primary-dark dark:text-primary">
              {title}
            </h1>
            <div className="mt-2 mb-2">
              <Share url={`${host}/${slug}`} />
            </div>
            <div className="mt-2 uppercase text-green-800 font-xl">
              <b>{category}</b>
            </div>
            <div className="blog prose prose-lg dark:prose-invert max-w-2xl md:max-w-4xl lg:max-w-5xl">
              {parse(content)}
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="col-12 col-md-2 px-2 md:mt-[91px] mt-10">
          <div className="pt-5">
            <p className="text-3xl font-semibold text-primary-dark dark:text-primary p-2 mb-4">
              Bài viết cùng chủ đề
            </p>
            <div className="flex items-center flex-col space-y-4">
              {relatedPosts
                .filter((p) => p.category === category)
                .slice(0, 5)
                .map((p) => (
                  <Link key={p.slug} href={`/bai-viet/${p.slug}`} legacyBehavior>
                    <a className="flex space-x-4 font-semibold text-primary-dark dark:text-primary hover:underline w-full">
                      {p.thumbnail && (
                        <Image
                          src={p.thumbnail}
                          alt={p.title}
                          width={192}
                          height={128}
                          className="w-48 h-32 object-cover rounded hover:scale-102 transition-all ease duration-300 md:block hidden"
                        />
                      )}
                      <span className="flex flex-col">
                        <span className="hidden md:block text-green-800 uppercase text-sm mb-1 underline">
                          {p.category}
                        </span>
                        <span>{p.title}</span>
                      </span>
                    </a>
                  </Link>
                ))}
            </div>
            {/* Quảng cáo bên dưới phần "Bài viết cùng chủ đề" */}
            <AdBanner key="related-posts-ad" adSlot="7944007968" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SinglePost;

export const getServerSideProps: GetServerSideProps<
  { post: PostData; meta: MetaData },
  { slug: string }
> = async ({ params }) => {
  try {
    await db.connectDb();

    const post = await Post.findOne({ slug: params?.slug });
    if (!post) {
      console.log(`Post not found for slug: ${params?.slug}`);
      return { notFound: true };
    }

    const posts = await Post.find({
      _id: { $ne: post._id },
      category: post.category,
    })
      .sort({ createdAt: "desc" })
      .limit(5)
      .select("slug title thumbnail category");

    const relatedPosts = posts.map((p) => ({
      id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      category: p.category || "Uncategorized",
      thumbnail: p.thumbnail?.url,
    }));

    const { _id, title, content, meta, slug, tags, thumbnail, category, createdAt } = post;

    const metaData: MetaData = {
      title,
      description: meta,
      author: "Trường NQ Web",
      canonical: `https://truongnq.vn/bai-viet/${slug}`,
      og: {
        title,
        description: meta,
        type: "website",
        image: thumbnail?.url || "https://truongnq.vn/baner-web.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: `https://truongnq.vn/bai-viet/${slug}`,
        siteName: "Trường NQ Web",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: meta,
        image: thumbnail?.url || "https://truongnq.vn/baner-web.jpg",
      },
    };

    const postData: PostData = {
      id: _id.toString(),
      title,
      content,
      meta,
      slug,
      tags,
      category,
      thumbnail: thumbnail?.url || "",
      createdAt: createdAt.toString(),
      relatedPosts,
    };

    return {
      props: {
        post: postData,
        meta: metaData,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true };
  }
};
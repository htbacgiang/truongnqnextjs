/** @type {import('next-sitemap').IConfig} */
import Post from './models/Post'; // Sử dụng import thay vì require
import * as db from './utils/db'; // Sử dụng import thay vì require

export default {
  siteUrl: 'https://truongnq.vn',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  async additionalPaths() {
    await db.connectDb();
    const posts = await Post.find({}, 'slug updatedAt');
    await db.disconnectDb();

    return posts.map((post) => ({
      loc: `/bai-viet/${post.slug}`,
      lastmod: post.updatedAt ? post.updatedAt.toISOString() : new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
};
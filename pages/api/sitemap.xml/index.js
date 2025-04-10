import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db'; // Đường dẫn đến file db của bạn
import Post from '../../../models/Post'; // Đường dẫn đến model Post

// Danh sách các trang tĩnh
const staticPages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/gioi-thieu', changefreq: 'monthly', priority: '0.7' },
  { url: '/dich-vu-seo', changefreq: 'monthly', priority: '0.7' },
  { url: '/lien-he', changefreq: 'monthly', priority: '0.7' },
  { url: '/thiet-ke-web', changefreq: 'weekly', priority: '0.8' },
  { url: '/bai-viet', changefreq: 'weekly', priority: '0.8' },
  { url: '/album', changefreq: 'weekly', priority: '0.8' },

  // Thêm các trang tĩnh khác của bạn tại đây
];

// Hàm tạo nội dung sitemap
const generateSitemap = (posts) => {
  const baseUrl = 'https://truongnq.vn'; // Thay bằng domain thật của bạn

  // Tạo XML cho các trang tĩnh
  const staticPagesXml = staticPages
    .map((page) => `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `)
    .join('');

  // Tạo XML cho các bài viết động
  const postUrls = posts
    .map((post) => `
      <url>
        <loc>${baseUrl}/bai-viet/${encodeURIComponent(post.slug)}</loc>
        <lastmod>${new Date(post.updatedAt || post.createdAt).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPagesXml}
  ${postUrls}
</urlset>`;
};

// Hàm lấy dữ liệu bài viết
const getPostsForSitemap = async () => {
  try {
    await db.connectDb();
    const posts = await Post.find({}, 'slug updatedAt createdAt').lean();
    await db.disconnectDb();
    return posts;
  } catch (error) {
    console.error('Lỗi khi lấy bài viết:', error);
    throw error;
  }
};

// Handler chính
const handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const posts = await getPostsForSitemap();
    const sitemap = generateSitemap(posts);

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache 1 giờ
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Lỗi khi tạo sitemap:', error);
    res.status(500).end('Lỗi máy chủ khi tạo sitemap');
  }
};

export default handler;
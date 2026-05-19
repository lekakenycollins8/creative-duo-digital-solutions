// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.creativeduodigitalsolutions.com' });

  const today = new Date().toISOString().split('T')[0];

  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today },
    { url: '/services', changefreq: 'monthly', priority: 0.9, lastmod: today },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.9, lastmod: today },
    { url: '/pricing', changefreq: 'monthly', priority: 0.8, lastmod: today },
    { url: '/hosting-plans', changefreq: 'monthly', priority: 0.8, lastmod: today },
    { url: '/contact', changefreq: 'monthly', priority: 0.7, lastmod: today },
    { url: '/skills-timeline', changefreq: 'monthly', priority: 0.6, lastmod: today },
  ];

  const writeStream = createWriteStream(path.resolve(__dirname, 'dist', 'sitemap.xml'));

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  streamToPromise(sitemap).then(data => {
    writeStream.write(data.toString());
    console.log('✅ Sitemap generated!');
  });
})();
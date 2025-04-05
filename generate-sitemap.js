// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.creativeduodigitalsolutions.com' });

  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/skills-timeline', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
    { url: '/hosting-plans', changefreq: 'weekly', priority: 0.8 },
    // Add all your known routes here
  ];

  const writeStream = createWriteStream(path.resolve(__dirname, 'dist', 'sitemap.xml'));

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  streamToPromise(sitemap).then(data => {
    writeStream.write(data.toString());
    console.log('✅ Sitemap generated!');
  });
})();
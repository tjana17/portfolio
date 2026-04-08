'use strict';

/**
 * Minimal build pipeline for portfolio
 *
 * What it does:
 *   1. Cleans and recreates /dist
 *   2. Minifies all CSS partials → dist/assets/css/style.css (single concatenated file)
 *   3. Minifies all JS files   → dist/assets/js/*.js
 *   4. Minifies index.html     → dist/index.html
 *   5. Copies static assets    → dist/assets/images/, dist/assets/blogs/
 *   6. Copies robots.txt, sitemap.xml, 404.html to dist/
 *
 * Usage:
 *   npm run build          — one-off production build
 *   npm run build:watch    — rebuild on file changes (requires chokidar)
 */

const fs   = require('fs');
const path = require('path');

// ─── Helpers ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
  const kb = (Buffer.byteLength(content, 'utf8') / 1024).toFixed(1);
  console.log(`  ✓ ${path.relative(ROOT, filePath)} (${kb} KB)`);
}

// ─── Paths ──────────────────────────────────────────────────────────────────

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

// CSS partials in import order (mirrors style.css @import order)
const CSS_PARTIALS = [
  '_variables.css',
  '_base.css',
  '_sidebar.css',
  '_navbar.css',
  '_about.css',
  '_resume.css',
  '_portfolio.css',
  '_blog.css',
  '_contact.css',
  '_modal.css',
  '_responsive.css',
].map(f => path.join(ROOT, 'assets', 'css', f));

const JS_FILES = [
  'config.js',
  'script.js',
  'projects-data.js',
  'projects.js',
  'skills.js',
  'blogs.js',
].map(f => path.join(ROOT, 'assets', 'js', f));

const STATIC_FILES = [
  'robots.txt',
  'sitemap.xml',
  '404.html',
];

// ─── Build ──────────────────────────────────────────────────────────────────

async function build() {
  const startTime = Date.now();

  // Lazy-load minifiers (only needed at build time)
  const { minify: minifyHTML } = require('html-minifier-terser');
  const { minify: minifyCSS  } = require('csso');
  const { minify: minifyJS   } = require('terser');

  console.log('\n🔨 Building portfolio...\n');

  // 1. Clean dist
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  ensureDir(DIST);

  // 2. CSS — concatenate all partials then minify into a single style.css
  console.log('📦 CSS:');
  const rawCSS = CSS_PARTIALS.map(f => readFile(f)).join('\n');
  const minifiedCSS = minifyCSS(rawCSS).css;
  writeFile(path.join(DIST, 'assets', 'css', 'style.css'), minifiedCSS);

  // 3. JS — minify each file individually
  console.log('📦 JS:');
  for (const jsFile of JS_FILES) {
    const raw = readFile(jsFile);
    const result = await minifyJS(raw, {
      compress: { drop_console: false },
      mangle: true,
    });
    writeFile(
      path.join(DIST, 'assets', 'js', path.basename(jsFile)),
      result.code
    );
  }

  // 4. HTML — update asset references and minify
  console.log('📦 HTML:');
  let html = readFile(path.join(ROOT, 'index.html'));

  // Point HTML to the single bundled style.css (remove partial @imports — not needed in dist)
  html = html.replace(
    /<link rel="stylesheet" href="\.\/assets\/css\/style\.css">/,
    '<link rel="stylesheet" href="./assets/css/style.css">'
  );

  const minifiedHTML = await minifyHTML(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  });
  writeFile(path.join(DIST, 'index.html'), minifiedHTML);

  // 5. Copy static assets (images, blogs HTML content)
  console.log('📦 Static assets:');
  const imagesSrc = path.join(ROOT, 'assets', 'images');
  const blogsSrc  = path.join(ROOT, 'assets', 'blogs');
  if (fs.existsSync(imagesSrc)) {
    copyDir(imagesSrc, path.join(DIST, 'assets', 'images'));
    console.log(`  ✓ assets/images/ (copied)`);
  }
  if (fs.existsSync(blogsSrc)) {
    copyDir(blogsSrc, path.join(DIST, 'assets', 'blogs'));
    console.log(`  ✓ assets/blogs/ (copied)`);
  }

  // 6. Copy root static files
  for (const file of STATIC_FILES) {
    const src = path.join(ROOT, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, file));
      console.log(`  ✓ ${file} (copied)`);
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Build complete in ${elapsed}s → dist/\n`);
}

// ─── Watch mode ─────────────────────────────────────────────────────────────

async function watch() {
  await build();
  const chokidar = require('chokidar');
  const watchPaths = [
    path.join(ROOT, 'index.html'),
    path.join(ROOT, 'assets', 'css'),
    path.join(ROOT, 'assets', 'js'),
  ];
  console.log('👀 Watching for changes...\n');
  chokidar.watch(watchPaths, { ignoreInitial: true }).on('change', async (filePath) => {
    console.log(`\n📝 Changed: ${path.relative(ROOT, filePath)}`);
    await build().catch(console.error);
  });
}

// ─── Entry point ────────────────────────────────────────────────────────────

const isWatch = process.argv.includes('--watch');
(isWatch ? watch : build)().catch(err => {
  console.error('\n❌ Build failed:', err.message);
  process.exit(1);
});

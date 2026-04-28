// import src, dest, task, watch, series, parallel from gulp
import pkg from 'gulp';
const { src, dest, watch, series, parallel } = pkg;
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { deleteAsync as del } from 'del';
import PathUrl from './path-config.js';
import browserSync from 'browser-sync';
import fileInclude from 'gulp-file-include';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import postcss from 'gulp-postcss';

import fs from 'fs';
import path from 'path';

// ✅ FIXED: Dynamic import untuk gulp-imagemin (avoid top-level await)
let imagemin;
async function loadImagemin() {
  if (!imagemin) {
    const module = await import('gulp-imagemin');
    imagemin = module.default;
  }
  return imagemin;
}

const sassCompiler = gulpSass(sass);

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: PathUrl.paths.tmp.base
    },
    port: PathUrl.config.port || 5000
  });
  done();
}

// Triggers Browser reload
function previewReload(done) {
  console.log("🔄 Reloading Browser Preview.");
  browserSync.reload();
  done();
}

// Include HTML
function includeHTML() {
  return src([
    `${PathUrl.paths.src.base}/pages/**/*.html`,
    `!${PathUrl.paths.src.base}/layouts/*.html`,
    `!${PathUrl.paths.src.base}/components/*.html`
  ])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest(PathUrl.paths.tmp.base));
}

function devStyles() {
  return src([`${PathUrl.paths.src.css}/**/*.css`,`${PathUrl.paths.src.sass}/**/*.scss`])
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(postcss([
      tailwindcss(PathUrl.config.tailwindjs),
      autoprefixer,
    ]))
    .pipe(concat({ path: 'style.css' }))
    .pipe(dest(PathUrl.paths.tmp.css));
}

function devScripts() {
  return src(`${PathUrl.paths.src.js}/**/*.js`)
    .pipe(dest(PathUrl.paths.tmp.js));
}

function devImages() {
  return src(`${PathUrl.paths.src.img}/**/*.{png,jpg,jpeg,svg}`)
    .pipe(dest(PathUrl.paths.tmp.img));
}

function devFonts() {
  return src(`${PathUrl.paths.src.fonts}/**/*.{ttf,woff,woff2,eot,svg}`)
    .pipe(dest(PathUrl.paths.tmp.fonts));
}

function watchFiles() {
  watch(`${PathUrl.paths.src.base}/**/*.html`, series(includeHTML, devStyles, previewReload));
  watch([PathUrl.config.tailwindjs, `${PathUrl.paths.src.sass}/**/*.scss`], series(devStyles, previewReload));
  watch(`${PathUrl.paths.src.js}/**/*.js`, series(devScripts, previewReload));
  watch(`${PathUrl.paths.src.img}/**/*.{png,jpg,jpeg,svg}`, series(devImages, previewReload));
  watch(`${PathUrl.paths.src.fonts}/**/*.{ttf,woff,woff2,eot,svg}`, series(devFonts, previewReload));
  console.log("\n\t👀 Watching for Changes..\n");
}

function devClean() {
  console.log("🧹 Cleaning tmp & dist folder for fresh start.");
  return del([PathUrl.paths.tmp.base, PathUrl.paths.dist.base]);
}

// Production Tasks (Optimized Build for Live/Production Sites)
function prodHTML() {
  return src([`${PathUrl.paths.tmp.base}/*.html`])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(PathUrl.paths.dist.base));
}

// ✅ Validation function (cleaner)
function validateTmpStyles(done) {
  const styleCssFile = path.join(PathUrl.paths.tmp.css, 'style.css');

  if (!fs.existsSync(styleCssFile)) {
    console.error('\n' + '╔' + '═'.repeat(58) + '╗');
    console.error('║' + ' '.repeat(20) + '❌ BUILD ERROR' + ' '.repeat(24) + '║');
    console.error('╠' + '═'.repeat(58) + '╣');
    console.error('║' + ' '.repeat(58) + '║');
    console.error('║  Missing: .tmp/assets/css/style.css' + ' '.repeat(22) + '║');
    console.error('║' + ' '.repeat(58) + '║');
    console.error('║  The .tmp folder must be generated before building. ' + ' '.repeat(4) + ' ║');
    console.error('║' + ' '.repeat(58) + '║');
    console.error('╠' + '═'.repeat(58) + '╣');
    console.error('║  💡 HOW TO FIX:' + ' '.repeat(42) + '║');
    console.error('║' + ' '.repeat(58) + '║');
    console.error('║     $ npm run dev     # Generate .tmp folder ' + ' '.repeat(12) + '║');
    console.error('║     $ npm run build   # Build for production ' + ' '.repeat(12) + '║');
    console.error('║' + ' '.repeat(58) + '║');
    console.error('╚' + '═'.repeat(58) + '╝' + '\n');
    
    // ✅ Signal error tanpa stack trace
    process.exitCode = 1;
    return done();  // ← Return without error object
  }

  console.log('✅ Validation: .tmp/assets/css/style.css found');
  done();
}

// ✅ FIXED: Hapus purgecss karena Tailwind v3 sudah menggunakan JIT Engine
function prodStyles() {
  return src(`${PathUrl.paths.tmp.css}/**/*.css`)
    .pipe(cleanCSS())
    .pipe(dest(PathUrl.paths.dist.css));
}

function prodScripts() {
  return src(`${PathUrl.paths.src.js}/**/*.js`)
    .pipe(terser())
    .pipe(dest(PathUrl.paths.dist.js));
}

// ✅ FIXED: Dynamic import untuk imagemin
async function prodImages() {
  const imageminPlugin = await loadImagemin();
  return src(`${PathUrl.paths.src.img}/**/*.{png,jpg,jpeg,svg}`)
    .pipe(imageminPlugin())
    .pipe(dest(PathUrl.paths.dist.img));
}

// ✅ FIXED: Tambah .pipe(dest()) yang hilang
function prodFonts() {
  return src(`${PathUrl.paths.src.fonts}/**/*.{ttf,woff,woff2,eot,svg}`)
    .pipe(dest(PathUrl.paths.dist.fonts));
}

function prodClean() {
  console.log("🧹 Cleaning dist folder for fresh start.");
  return del([PathUrl.paths.dist.base]);
}

function buildFinish(done) {
  console.log(`\n✅ Production build is complete!\n📦 Files are located at: ${PathUrl.paths.dist.base}\n`);
  done();
}

export default series(
  devClean,
  includeHTML,
  parallel(devStyles, devScripts, devImages, devFonts),
  livePreview,
  watchFiles
);

export const prod = series(
  prodClean,
  includeHTML,
  validateTmpStyles,  // ✅ Run validation first
  parallel(prodHTML, prodStyles, prodScripts, prodImages, prodFonts),
  buildFinish
);

export { devClean };
const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

const { paths } = require('../config');

const favicons = () => {
  return (
    src(paths.favicons.src)
      .pipe(dest(paths.favicons.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = favicons;

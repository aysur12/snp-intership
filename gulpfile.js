const { parallel, series } = require('gulp');
const gulp = require('gulp');
const deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

const { views, clean, server, styles, images, fonts, scripts, svgSprite } = require('./gulp/tasks');

const build = series(clean, parallel(views, styles, scripts, fonts, images, svgSprite));
const start = series(build, server);

module.exports = {
  start,
  build,
}

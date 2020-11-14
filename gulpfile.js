const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

gulp.task("default", function() {
  return (
    gulp
      .src("src/scss/style.scss")
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(gulp.dest("dist/css"))
  );
});
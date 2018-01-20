const gulp = require('gulp')

gulp.task('build:styleguide', function () {
    var concat = require('gulp-concat')
    var postcss = require('gulp-postcss')
    var autoprefixer = require('autoprefixer')
    var customProperties = require('postcss-css-variables')
    var Import = require('postcss-import')
    var styleGuide = require('postcss-style-guide')
    var nano = require('cssnano')

    return gulp.src('./styles/app.css')
      .pipe(postcss([
          Import,
          customProperties({ preserve: true }),
          autoprefixer,
          styleGuide({
            project: 'Case Study App',
            dest: 'public/styleguide.html'
          }),
          nano
      ]))
      .pipe(concat('./public/styleguide.min.css'))
      .pipe(gulp.dest('.'))
})

gulp.task('default', function() {
 gulp.watch('./styles/*.css', ['build:styleguide']);
})

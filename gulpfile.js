var gulp 		= require('gulp');
//var concatCss 	= require('gulp-concat-css');
var cleanCSS 	= require('gulp-clean-css');
//var sourcemaps 	= require('gulp-sourcemaps');
var watch 		= require('gulp-watch');
var cssmin 		= require("gulp-cssmin");
var concat 		= require("gulp-concat");
var stripCssComments = require('gulp-strip-css-comments');

var css = [
	'bower_components/bootstrap/dist/css/bootstrap.min.css',
	'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
];
 
gulp.task('minifsy-css', function(){
    gulp.src(css)
    .pipe(concat('style.min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('minify-css', function() {
    return gulp.src('/assets/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist/css'));
});
 
gulp.task('default','minify-css');
 
gulp.task('watch', function() {
  gulp.watch(css, ['minify-css']);
});

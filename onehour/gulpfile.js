var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
	var postcss    = require('gulp-postcss');
	var sourcemaps = require('gulp-sourcemaps');

	return gulp.src('styles/style.css')
		.pipe( sourcemaps.init() )
		.pipe( postcss([ require('precss') ]) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest('build/') )
		.pipe(browserSync.stream());
});

gulp.task('autoprefixer', function () {
	var postcss      = require('gulp-postcss');
	var sourcemaps   = require('gulp-sourcemaps');
	var autoprefixer = require('autoprefixer');

	return gulp.src('build/style.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['css'], function() {

	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch('styles/*.css', ['css']);
	gulp.watch('build/*.css', ['autoprefixer']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
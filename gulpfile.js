var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');

gulp.task('less', function () {
	gulp.src('./src/styles/**/*.less')
			.pipe(less())
			.pipe(gulp.dest('./dist/css/'));
});

gulp.task('less:watch', function () {
	gulp.watch('./src/styles/**/*.less', ['less']);
});

gulp.task('sass', function () {
	gulp.src('./src/styles/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/styles/**/*.scss', ['sass']);
});
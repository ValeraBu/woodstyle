var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs'),
		cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		spritesmith = require('gulp.spritesmith'),
		autoprefixer = require('gulp-autoprefixer'),
		remember = require('gulp-remember'),
		gulpif = require('gulp-if'),
		include = require('gulp-file-include'),
		prettify = require('gulp-html-prettify'),
		cleanCSS = require('gulp-clean-css'),
		csscomb = require('gulp-csscomb'),
		 gcmq = require('gulp-group-css-media-queries'),
		 svgToSss = require('gulp-svg-to-css');

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], { cascade: true }))
		 .pipe(gcmq())
		 .pipe(csscomb())
		.pipe(gulp.dest('dist/css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({
    extname: '.min.css'
   }))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
		return gulp.src('app/css/libs.css')
				.pipe(cssnano())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('app/css'));
});

gulp.task('html', function() {
		return gulp.src('app/html/*.html')
		  .pipe(include({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(prettify({
      	indent_char: '	',
        indent_size: 1
      }))
				.pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
		return gulp.src('app/js/*.js')
		  .pipe(include({
        prefix: '@@',
        basepath: '@file'
      }))

			.pipe(gulp.dest('dist/js'))
				.pipe(uglify())
						.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('dist/js'));
			});

gulp.task('svg:base', function() {
		return gulp.src('app/svg/base/*.svg')
		  .pipe(svgToSss('svgBase.scss'))
				.pipe(gulp.dest('app/scss/sprite'));
});

gulp.task('sprite', function() {
		return gulp.src('app/img/sprites/*.png')
		// .pipe(remember('sprite'))
		.pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.scss',
				padding: 15,
        imgPath:'../img/sprite/sprite.png'
			}))
		.pipe(
			gulpif('*.png', gulp.dest('dist/img/sprite'), gulp.dest('app/scss/sprite'))
			);
});

gulp.task('default', ['browser-sync','css-libs', 'scripts', 'html', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass'])
	gulp.watch('app/js/**/*.js', ['js'])
	gulp.watch('app/html/**/*.html', ['html', browserSync.reload]);
	gulp.watch('app/img/sprites/*.png', ['sprite']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/svg/base/*.svg', ['svg:base']);
});

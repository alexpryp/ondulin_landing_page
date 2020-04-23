const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin'); //Минификатор CSS файлов
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

function styles() {
	return gulp.src('./src/sass/style.scss') //берём файлы на обработку
				.pipe(sass().on('error', sass.logError)) //компиляция из scss в css
				.pipe(autoprefixer({
		            overrideBrowserlist: ['> 1%'],
		            cascade: false
		        }))
				.pipe(cssmin())
				.pipe(gulp.dest('./dist/css')); //сохраняем обработанные файлы
}

function scripts() {
	return gulp.src(['./src/js/script.js']) //берём файлы на обработку
				.pipe(concat('script.js')) //Объединение всех файлов в один script.js
				.pipe(babel({
		            presets: ['@babel/env']
		        }))
				.pipe(gulp.dest('./dist/js')); //сохраняем обработанные файлы
}

function watch() {   // создание таска, отслеживающего изменения файлов и, при наличии изменений, запускающего указанные обработчики-таски
	gulp.watch('./src/sass/**/*.scss', styles); //в случае изменений в исходниках scss, автоматически запускает на выполнение таск styles
	gulp.watch('./src/js/**/*.js', scripts);  //в случае изменений в исходниках js, автоматически запускает на выполнение таск scripts
}

function clean() {
	return del(['./*.css', './script.js']); //удаление файлов в указанных директориях
}


gulp.task('styles', styles); //регистрация таска styles
gulp.task('scripts', scripts); //регистрация таска scripts
gulp.task('watch', watch); //регистрация таска watch
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watch from 'gulp-watch';
import log from 'fancy-log';
import browserify from 'browserify';
import babel from 'gulp-babel';
import connect from 'gulp-connect';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';

const path = {
    jsx: './app/src/**/*.jsx',
    html: './app/*.html'
};

gulp.task('transform', () => {
    return gulp.src(path.jsx)
        .pipe(babel({
            presets: ["react", "env"]
        }))
        .on('error', (e)=>{console.log('Error en JSX')})
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('js', ['transform'], () => {
    return browserify('./app/dist/main.js')
        .bundle()
        .on('error', log)
        .pipe(source('main.js'))
        .pipe(buffer(uglify()))
        .pipe(gulp.dest('./app'))
});

gulp.task('connect', () => {
    connect.server({
        root: 'app',
        port: 3000,
        livereload: true
    })
});

gulp.task('html', () => {
    gulp.src(path.html)
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

gulp.task('lint', function () {
  return gulp.src(path.jsx)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['connect', 'js'], () => {
    gulp.watch(path.jsx, ['js', 'lint']);
    gulp.watch(path.html, ['html']);
});

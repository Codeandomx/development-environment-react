import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babel from 'gulp-babel';
import connect from 'gulp-connect';

gulp.task('transform', () => {
    return gulp.src('./app/src/**/*.jsx')
        .pipe(babel({
            presets: ["react", "env"]
        }))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('js', ['transform'], () => {
    return browserify('./app/dist/main.js')
        .bundle()
        .on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./app'))
});

gulp.task('connect', () => {
    connect.server({
        root: 'app',
        port: 3000,
        livereload: true
    });
});

gulp.task('html', () => {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

gulp.task('default', ['js', 'connect'], () => {
    gulp.watch('./app/**/*.jsx', ['js']);
    gulp.watch('./app/*.html', ['html']);
});

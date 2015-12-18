var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var paths = {
    'bower':'./bower_components',
    'assets':'./_assets'
};

//Init of Styles (CSS) Tasks
gulp.task('styles', function() {
    gulp.src([paths.assets+'/styles/app.scss' ])
    .pipe(sass({includePaths:[paths.bower+'/foundation-sites/scss']}))
    //.pipe(concat('app.css'))
    .pipe(gulp.dest('./_css'));
});
//End of Styles (CSS) Tasks

//Init of Scripts (JS) Tasks
gulp.task('scripts', function(){
    //Foundation
    gulp.src([
        //paths.bower+'/foundation/js/foundation/foundation.js',
        paths.bower+'/foundation-sites/dist/foundation.js',
        paths.assets+'/scripts/app.js'
    ])
    .pipe(concat('app.js')).pipe(gulp.dest('./_js'));
    //Jquery
    gulp.src([paths.bower+'/jquery/dist/jquery.js']).pipe(gulp.dest('./_js'));
    //Media query utils.
    gulp.src([paths.bower+'/foundation-sites/js/foundation.util.mediaQuery.js']).pipe(gulp.dest('./_js'));
});
//End of Scripts (JS) Tasks

gulp.task('watch', function(){
    gulp.watch(paths.assets+'/styles/**/*.scss', ['styles']);
    gulp.watch(paths.assets+'/scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts']);
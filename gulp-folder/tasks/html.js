
gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('html:cms', () => {
  return gulp.src(['../Cms13/Sites/1/templates/shared/*.cshtml'])
    .pipe($.useref({searchPath: ['../Cms13','.tmp', '.'], noconcat:false}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    // .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('../Cms13/Sites/1/templates/shared/'))
    .pipe(gulp.dest('../Cms13/'));
});


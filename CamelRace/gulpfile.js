var gulp = require('gulp');
gulp.task('hello', function() {
  console.log('Hello Zell');
});

var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(
      ['CamelRace/app/js/angular.js',
        'CamelRace/app/js/app.module.js',
        'CamelRace/app/graph/graph.component.js',
        'CamelRace/app/bar-list/bar-list.component.js'
      ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('CamelRace/dist/'));
});

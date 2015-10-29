var gulp = require('gulp');
var downloader = require('./');

gulp.task('download', function download() {
  return downloader([
    'http://img-9gag-fun.9cache.com/photo/am8KKrV_460s.jpg',
    'http://img-9gag-fun.9cache.com/photo/aBrjobD_460s.jpg',
    {
      fileName: 'gulp-downloader.zip',
      request: {
        url: 'https://github.com/MrBoolean/gulp-downloader/archive/master.zip'
      }
    }
  ])
    .pipe(gulp.dest('./dist'))
  ;
});

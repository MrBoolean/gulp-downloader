gulp-downloader
===============

## Install
```
npm i --save downloadr
```

## Usage
```javascript
var download = require('gulp-downloader');
```

### Using a string
```javascript
gulp.task('download', function() {
  return download('http://img-9gag-fun.9cache.com/photo/1293694_700b.jpg');
})
```

### Using an object
```javascript
gulp.task('download', function() {
  return download({
    fileName: 'my-image.jpg',
    request: {
      url: 'http://img-9gag-fun.9cache.com/photo/1293694_700b.jpg'
    }
  });
})
```

### Using a bunch of data
```javascript
gulp.task('download', function() {
  return download([
    'http://img-9gag-fun.9cache.com/photo/1293694_700b.jpg',
    {
      fileName: 'downloadr.zip',
      request: {
        url: 'https://github.com/MrBoolean/downloadr/archive/master.zip'
      }
    }
  ]);
})
```

## Available options
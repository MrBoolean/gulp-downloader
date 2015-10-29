gulp-downloader
===============
[![Code Climate](https://codeclimate.com/github/MrBoolean/gulp-downloader/badges/gpa.svg)](https://codeclimate.com/github/MrBoolean/gulp-downloader) [![Test Coverage](https://codeclimate.com/github/MrBoolean/gulp-downloader/badges/coverage.svg)](https://codeclimate.com/github/MrBoolean/gulp-downloader) [![Build Status](https://travis-ci.org/MrBoolean/gulp-downloader.svg?branch=master)](https://travis-ci.org/MrBoolean/gulp-downloader) [![Dependency Status](https://gemnasium.com/MrBoolean/gulp-downloader.svg)](https://gemnasium.com/MrBoolean/ggulp-downloader) [![npm](https://img.shields.io/npm/v/gulp-downloader.svg)](https://npmjs.org/gulp-downloader)

<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <br><br>
  A simple and smart download plugin for [gulp](http://gulpjs.com).
</p>

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
  return download('http://img-9gag-fun.9cache.com/photo/1293694_700b.jpg').pipe(gulp.dest('/dev/null'));
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
    })
    .pipe(gulp.dest('/dev/null'))
  ;
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
    ])
    .pipe(gulp.dest('/dev/null'))
  ;
})
```

## Available options
Option        | Description
------------- | ----------------------------------------------------------------------
`fileName`    | The file name as a string.
`request`     | An object which contains the [`request`](npmjs.com/request) options.

## License
The MIT License (MIT)

Copyright (c) 2015 Marc Binder <marcandrebinder@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

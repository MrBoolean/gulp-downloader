var util = require('util');
var PluginError = require('gulp-util').PluginError;
var request = require('request');
var ProgressBar = require('progress');
var path = require('path');
var isString = require('lodash.isstring');
var isArray = require('lodash.isarray');
var defaults = require('lodash.defaults');
var source = require('vinyl-source-stream');
var es = require('event-stream');

function download(options) {
  var file;
  var bar;

  if (!options) {
    throw new PluginError({
      plugin: 'gulp-downloader',
      message: 'The passed options are not valid'
    });
  }

  if (isString(options)) {
    options = {
      fileName: path.parse(options).base,
      request: {
        url: options
      }
    };
  }

  if (isArray(options)) {
    return es.concat.apply(es.concat, options.map(function downloadEach(item) {
      return download(item);
    }));
  }

  options = defaults(options || {}, {
    fileName: null,
    verbose: false,
    request: {}
  });

  file = source(options.fileName);

  return request(options.request)
    .on('response', function onResponse(res) {
      var total;

      if (!options.verbose) {
        return false;
      }

      /* istanbul ignore next */
      total = parseInt(res.headers['content-length'], 10);

      /* istanbul ignore next */
      if (total) {
        bar = new ProgressBar(
          util.format(' downloading "%s" [:bar] :percent :etas', options.fileName),
          {
            complete: '=',
            incomplete: ' ',
            width: 20,
            total: total
          }
        );

        res.on('data', function onChunk(chunk) {
          bar.tick(chunk.length || 0);
        });
      }
    })
    .pipe(file)
  ;
}

module.exports = download;
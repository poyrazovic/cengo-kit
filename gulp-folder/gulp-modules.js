const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const cms = require('./cms/cms');
const series = require('stream-series');
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const rename = require('gulp-rename');

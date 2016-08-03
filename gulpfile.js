/**
 gulp配置文件  add by sunzhimin
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

// 预处理css,兼容
gulp.task('post-css', function () {
  return gulp.src('card.css' )
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: true //是否美化属性值 默认：true 像这样：
      //-webkit-transform: rotate(45deg);
      //        transform: rotate(45deg);
      //,remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest( './' ));
});

gulp.task('default', ['post-css']);

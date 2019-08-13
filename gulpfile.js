var myapp = require('gulp')
var sass = require('gulp-sass')

function copyIndex(){
    return myapp.src('./src/index.html').pipe(myapp.dest('./dist'))
}
myapp.task('copy-index',copyIndex)

function Sass(){
    return myapp.src('./src/style/**/*.scss')
    .pipe(sass({
        outputStyle: "compressed"     //compact,compressed,expanded,nested
    }))
    .pipe(myapp.dest('./dist/style'))
}
myapp.task('sass',Sass)

function lib(){
    return myapp.src('./src/lib/*.*').pipe(myapp.dest('./dist/lib'))
}
myapp.task('copy-lib',lib)
function js(){
    return myapp.src('./src/script/**/*.js')
    .pipe(myapp.dest('./dist/script'))
}
myapp.task('js',js)

function copyHtml() {
    return myapp.src('./src/html/*.html').pipe(myapp.dest('./dist/html'))
}
myapp.task('copy-html', copyHtml)

var copyAll = myapp.parallel(copyIndex, copyHtml, js, lib, Sass)
myapp.task('copy-all', copyAll);

function watch(){
    myapp.watch('./src/index.html',copyIndex)
    myapp.watch('./src/style/**/*.scss',Sass)
    myapp.watch('./src/lib/**',lib)
    myapp.watch('./src/script/**/*.js',js)
    myapp.watch('./src/html/**/*.html',copyHtml)
}
myapp.task('watch',watch)
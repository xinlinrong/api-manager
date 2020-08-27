const mix = require('laravel-mix');
const env = 'dev';
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var jsConvertByEnv = function(originPath, outputPath) {
    if (env === 'dev') { 
        mix.copy(originPath, outputPath);
    } else {
        mix.js(originPath, outputPath);
    }
}

mix.js('resources/js/app.js','public/js/')
    .sass('resources/sass/app.scss', 'public/css');

mix.js('node_modules/layui-src/dist/layui.all.js', 'public/js/layui');
mix.copyDirectory('node_modules/layui-src/dist/css', 'public/js/layui/css/');
mix.copyDirectory('node_modules/layui-src/dist/font', 'public/js/layui/font/');
mix.copyDirectory('node_modules/layui-src/dist/images', 'public/js/layui/images/');
 
jsConvertByEnv('resources/js/common/http.js', 'public/js/common');
jsConvertByEnv('resources/js/common/application.js', 'public/js/common');
jsConvertByEnv('resources/js/user/passport.js', 'public/js/user');
const mix = require('laravel-mix');

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

mix.js('resources/js/app.js','public/js/')
    .sass('resources/sass/app.scss', 'public/css');

mix.js('node_modules/layui-src/dist/layui.all.js', 'public/js/layui');
mix.copyDirectory('node_modules/layui-src/dist/css', 'public/js/layui/css/');
mix.copyDirectory('node_modules/layui-src/dist/font', 'public/js/layui/font/');
mix.copyDirectory('node_modules/layui-src/dist/images', 'public/js/layui/images/');
 
mix.js('resources/js/user/passport.js', 'public/js/user');
mix.js('resources/js/common/http.js', 'public/js/common');
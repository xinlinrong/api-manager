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

var jsPackByEnv = function(input, output) {
    if (env === 'dev') {
        mix.copy(input, output);
    } else {
        mix.js(input, output);
    }
}

mix.js('resources/js/app.js','public/js/')
    .sass('resources/sass/app.scss', 'public/css');

mix.js('node_modules/layui-src/dist/layui.all.js', 'public/js/layui');
mix.copyDirectory('node_modules/layui-src/dist/css', 'public/js/layui/css/');
mix.copyDirectory('node_modules/layui-src/dist/font', 'public/js/layui/font/');
mix.copyDirectory('node_modules/layui-src/dist/images', 'public/js/layui/images/');

jsPackByEnv('resources/js/common/page.js', 'public/js/common');
jsPackByEnv('resources/js/common/application.js', 'public/js/common');
jsPackByEnv('resources/js/common/http.js', 'public/js/common');
jsPackByEnv('resources/js/common/ui/messagebox.js', 'public/js/common/ui');
jsPackByEnv('resources/js/user/login.js', 'public/js/user');
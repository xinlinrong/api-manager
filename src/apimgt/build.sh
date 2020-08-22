#!/bin/bash

echo -e "Remove directory node_modules...";
rm -rf node_modules;

echo -e "Remove directory public/css";
rm -rf public/css;

echo -e "Remove directory public/js";
rm -rf public/js;

echo -e "Remove directory vendor";
rm -rf vendor;

echo -e "Execute composer install command(配置阿里云 composer)...";
composer config repo.packagist composer https://mirrors.aliyun.com/composer/;
composer install;

echo -e "Execute npm install command (执行 node npm 安装命令)";
npm install;

echo -e "Execute webpack command (执行 webpack 命令)";
npm run dev;
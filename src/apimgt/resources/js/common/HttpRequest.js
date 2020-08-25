"use strict"

/**
 * Http 请求对象
 */
var HttpRequest;

(function(){
    /**
     * Http 请求构造函数
     */
    HttpRequest = function(options) {
        self = this;

        /**
         * 请求 URL
         */
        self.requesturl = '';

        /**
         * 请求方法
         */
        self.method = 'GET';

        /**
         * 要传输的数据
         */
        self.transdata = {};

        /**
         * 请求返回的类型
         */
        self.datatype = 'json';
 
        /**
         *请求超时时间 (秒)
         */
        self.timeout = 30000;

        /**
         * 请求头部设置
         */
        self.headers = {};
    }

    /**
     * HttpRequest 构造函数
     */
    HttpRequest.prototype.constructor = HttpRequest

     
})();
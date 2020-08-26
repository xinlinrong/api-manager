/**
 * Http 请求对象
 */
(function(){
    /**
     * Http 请求构造函数
     * @property requesturl: 请求 URL
     * @property method: 请求方法
     * @property data: 发送请求数据
     * @property datatype: 返回的数据类型
     * @property timeoutinsec: 过期时间
     * @property headers: 请求头
     * @property processdata: 是否处理进度数据 (Ajax 专用)
     * @property contenttype: 内容类型
     * @property xhr: 进度处理回调函数
     */
    HttpRequest = function(options) {
        self = this;
        self.requesturl = (options.requesturl != undefined) ? options.requesturl : '';
        self.method = (options.method != undefined) ? options.method : 'GET';
        self.data = (options.data != undefined) ? options.data : {} ;
        self.datatype = (options.datatype != undefined) ? options.datatype : 'json';
        self.timeoutinsec = (options.timeout != undefined) ? options.timeout : 30;
        self.headers = (options.headers != undefined) ? options.headers : null;
        self.processdata =(options.processdata != undefined) ?  options.processdata : false;
        self.contenttype = (options.contenttype != undefined) ? options.contenttype : false;
        self.xhr = (options.xhr != undefined) ? options.xhr : false;
    },
    HttpRequest.prototype.constructor = HttpRequest;
    HttpRequest.prototype.getByDefaultAdapter = function() {
        var requestdata = {};
        requestdata.url = self.requesturl;
        requestdata.method = self.method;
        requestdata.data = self.data;
        requestdata.datatype = self.datatype;
        requestdata.timeout = self.timeoutinsec;
        if (self.headers)  requestdata.headers = self.headers;
        if (self.processdata) requestdata.processData = self.processdata;
        if (self.contenttype) requestdata.contenttype = self.contenttype;
        if (self.xhr) requestdata.xhr = self.xhr;
        return requestdata;
    }
    HttpRequest.prototype.getRequest = function() {
        return self.getByDefaultAdapter();
    }
})();
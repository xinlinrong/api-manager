/**
 * HttpRequest 请求对象
 */
(function(win){
    /**
     * Http 请求构造函数
     * @property requesturl: 请求 URL
     * @property method: 请求方法
     * @property data: 发送请求数据
     * @property datatype: 返回的数据类型
     * @property async: 是否异步
     * @property timeoutinsec: 过期时间
     * @property headers: 请求头
     * @property processdata: 是否处理进度数据 (Ajax 专用)
     * @property contenttype: 内容类型
     * @property xhr: 进度处理回调函数
     *
     * @method constructor(options) 构造函数
     * @method getByDefaultAdapter() 默认获取请求数据
     * @method getRequest() 获取请求数据
     */
    win.HttpRequest = function(options) {
        this.requesturl = (options.requesturl != undefined) ? options.requesturl : '';
        this.method = (options.method != undefined) ? options.method : 'GET';
        this.data = (options.data != undefined) ? options.data : {} ;
        this.datatype = (options.datatype != undefined) ? options.datatype : 'json';
        this.async = (options.async != undefined) ? options.async : true;
        this.timeoutinsec = (options.timeout != undefined) ? options.timeout : 30;
        this.headers = (options.headers != undefined) ? options.headers : null;
        this.processdata =(options.processdata != undefined) ?  options.processdata : false;
        this.contenttype = (options.contenttype != undefined) ? options.contenttype : false;
        this.xhr = (options.xhr != undefined) ? options.xhr : false;
    },
    HttpRequest.prototype.constructor = HttpRequest;
    HttpRequest.prototype.getByDefaultAdapter = function() {
        var requestdata = {};
        requestdata.url = this.requesturl;
        requestdata.type = this.method;
        requestdata.data = this.data;
        requestdata.dataType = this.datatype;
        requestdata.async = this.async;
        requestdata.timeout = this.timeoutinsec * 1000;
        if (this.headers)  requestdata.headers = this.headers;
        if (this.processdata) requestdata.processData = this.processdata;
        if (this.contenttype) requestdata.contenttype = this.contenttype;
        if (this.xhr) requestdata.xhr = this.xhr;
        return requestdata;
    }
    HttpRequest.prototype.getRequest = function() {return this.getByDefaultAdapter()}

    /**
     * HttpPostRequest 请求对象
     * @inheritdoc
     */
    win.HttpPostRequest =  function(options) {options.method = 'POST'; HttpRequest.call(this, options)}
    HttpPostRequest.prototype = HttpRequest.prototype
    HttpPostRequest.prototype.constructor = HttpPostRequest

    /**
     * HttpGetRequest
     * @inheritdoc
     */
    win.HttpGetRequest = function(options) {options.method = 'GET'; HttpRequest.call(this, options)}
    HttpGetRequest.prototype = HttpRequest.prototype
    HttpGetRequest.prototype.constructor = HttpGetRequest

   /**
     * HttpRequestHandler 处理对象
     * Http 请求处理类构造函数
     * @property httpRequest: http 请求类
     * @property successCallback: 成功返回时的回调函数
     * @property errorCallback: 失败时回调函数
     *
     * @method constructor() 构造函数
     * @method execute() 执行请求
     */
    win.HttpRequestHandler = function(httpRequest, successCallback, errorCallback) {
        this.httpRequest = httpRequest;
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
    }
    HttpRequestHandler.prototype.constructor = HttpRequestHandler
    HttpRequestHandler.prototype.checkIfFunction = function(fn) {return fn &&(typeof(fn) == 'function')}
    HttpRequestHandler.prototype.checkAllowMethod=function(){
        return (this.httpRequest instanceof HttpPostRequest 
        || this.httpRequest instanceof HttpGetRequest)
    }
    HttpRequestHandler.prototype.execute = function() {
        if ($ === undefined) throw HttpException("Empty XHttpRequest Object");
        if (!this.checkAllowMethod()) throw HttpException("Empty Http Request");
        let requestdata = this.httpRequest.getRequest();
        if (this.checkIfFunction(this.successCallback)) requestdata.success = this.successCallback;
        if (this.checkIfFunction(this.errorCallback)) requestdata.error = this.errorCallback;
        return $.ajax(requestdata);
    }

    /**
     * HttpException 异常对象
     * @inheritdoc
     */
    win.HttpException = function(message) {Error.call(this, message)}
    HttpException.prototype.constructor = HttpException
})(window);
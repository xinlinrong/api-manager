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
        this.success = (options.successCallback) ? options.successCallback : null;
        this.error = (options.errorCallback) ? options.errorCallback : null;
    },
    win.HttpRequest.prototype.constructor = HttpRequest;
    win.HttpRequest.prototype.getByDefaultAdapter = function() {
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
        if (this.success) requestdata.success = this.success;
        if (this.error) requestdata.error = this.error;
        return requestdata;
    }
    win.HttpRequest.prototype.getRequest = function() {return this.getByDefaultAdapter()}

    /**
     * HttpPostRequest 请求对象
     * @inheritdoc
     */
    win.HttpPostRequest =  function(options) {HttpRequest.call(this, Object.assign(options, {method: 'POST'}))}
    win.HttpPostRequest.prototype = win.HttpRequest.prototype
    win.HttpPostRequest.prototype.constructor = win.HttpPostRequest

    /**
     * HttpGetRequest
     * @inheritdoc
     */
    win.HttpGetRequest = function(options) {HttpRequest.call(this, Object.assign(options, {method: 'GET'}))}
    win.HttpGetRequest.prototype = win.HttpRequest.prototype
    win.HttpGetRequest.prototype.constructor = win.HttpGetRequest

   /**
     * HttpRequestHandler 处理对象
     * Http 请求处理类构造函数
     * @property httpRequest: http 请求类
     *
     * @method constructor() 构造函数
     * @method execute() 执行请求
     */
    if (win.HttpRequestHandler === undefined) { 
        win.HttpRequestHandler = function(httpRequest) {
            this.httpRequest = httpRequest;
        }
        win.HttpRequestHandler.prototype.constructor = win.HttpRequestHandler
        win.HttpRequestHandler.prototype.checkIfFunction = function(fn) {return fn &&(typeof(fn) == 'function')}
        win.HttpRequestHandler.prototype.checkAllowMethod=function(){
            return (this.httpRequest instanceof HttpPostRequest 
            || this.httpRequest instanceof HttpGetRequest)
        }
        win.HttpRequestHandler.prototype.getJquery = function() {
            if (win.jQuery != undefined) return win.jQuery
            if (win.layui != undefined && (win.layui.jquery != undefined)) return win.layui.jquery
            return undefined
        }
        win.HttpRequestHandler.prototype.execute = function() {
            if (this.getJquery() === undefined) throw HttpException("Empty XHttpRequest Object");
            if (!this.checkAllowMethod()) throw HttpException("Empty Http Request");
            return this.getJquery().ajax(this.httpRequest.getRequest());
        }
    }

    /**
     * HttpException 异常对象
     * @inheritdoc
     */
    win.HttpException = function(message) {Error.call(this, message)}
    win.HttpException.prototype.constructor = win.HttpException

    /**
     * http 构造函数
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
     * @property successCallback: 成功执行回调函数
     * @property errorCallback: 失败执行回调函数
     *
     * @method constructor(options): 构造函数
     * @method setOptions(options): 设置 http 参数函数
     * @method setUrl(url): 设置 url
     * @method setData(data): 设置请求数据
     * @method setDataType(datatype): 设置返回类型
     * @method setAsync(async): 设置异步
     * @method setTimeout(timeout): 设置超时时间
     * @method setHeaders(headers): 设置请求头部参数
     * @method setProcessData(processdata): 设置数据处理过程
     * @method setContentType(contenttype): 设置 Content-Type
     * @method setXhr(xhr): 设置状态回调
     * @method setSuccessCallback(successCallback): 设置成功回调函数
     * @method setErrorCallback(errorCallback): 设置失败回调函数
     * @method post(): 执行 Post 请求
     * @method get(): 执行 Get 请求
     */
    win.http = function(options) {this.setOptions(options)}
    win.http.prototype.constructor = win.http;
    win.http.prototype.setOptions = function(options) {
        if (options) {
            this.url = (options.url != undefined) ? options.url : '';
            this.data = (options.data != undefined) ? options.data : {};
            this.method = (options.method != undefined) ? options.method : '';
            this.datatype = (options.datatype != undefined) ? options.datatype : 'json';
            this.async = (options.async != undefined) ? options.async : true;
            this.timeout = (options.timeout != undefined) ? options.timeout : 30;
            this.headers = (options.headers != undefined) ? options.headers : {};
            this.processdata = (options.processdata != undefined) ? options.processdata : false;
            this.contenttype = (options.contenttype != undefined) ? options.contenttype : false;
            this.xhr = (options.xhr != undefined) ? options.xhr : false;
            this.successCallback = (options.successCallback != undefined) ? options.successCallback : null;
            this.errorCallback = (options.successCallback != undefined) ? options.errorCallback : null;
        }
    }
    win.http.prototype.getOptions = function() {
        options = {};
        options.requesturl = this.url;
        options.method = this.method;
        options.data = this.data;
        options.dataType = this.datatype;
        options.async = this.async;
        options.timeout = this.timeout;
        if (this.headers)  options.headers = this.headers;
        if (this.processdata) options.processData = this.processdata;
        if (this.contenttype) options.contenttype = this.contenttype;
        if (this.xhr) options.xhr = this.xhr;
        if (this.successCallback) options.successCallback = this.successCallback;
        if (this.errorCallback) options.errorCallback = this.errorCallback;
        return options;
    }
    win.http.prototype.setUrl = function(url) {this.url = url; return this;}
    win.http.prototype.setMethod = function(method) {this.method = method; return this;}
    win.http.prototype.setData = function(data) {this.data = data; return this;}
    win.http.prototype.setDataType = function(datatype) {this.datatype = datatype; return this;}
    win.http.prototype.setAsync = function(async) {this.async = async; return this;}
    win.http.prototype.setTimeout = function(timeout) {this.timeout = timeout; return this;}
    win.http.prototype.setHeaders = function (headers) {this.headers = headers; return this;}
    win.http.prototype.setProcessData = function(processdata) {this.processdata = processdata; return this;}
    win.http.prototype.setContentType = function(contenttype) {this.contenttype = contenttype; return this;}
    win.http.prototype.setXhr = function(xhr) {this.xhr = xhr; return this;}
    win.http.prototype.setSuccessCallback = function(successCallback) {this.successCallback = successCallback; return this;}
    win.http.prototype.setErrorCallback = function(errorCallback) {this.errorCallback = errorCallback; return this;}
    win.http.prototype.post = function() {
        (new HttpRequestHandler(new HttpPostRequest(this.getOptions()))).execute();
    }
    win.http.prototype.get = function() {
        (new HttpRequestHandler(new HttpGetRequest(this.getOptions()))).execute();
    }
})(window);
/**
 * JS Page 类
 */
(function(win){
    /**
     * 当前页面 AppPage 构造函数
     */
    win.AppPage = function() {
        /**
         * 请求超时时间 30 秒
         */
        this.requestTimeout = 30000;
        this.data = {};
    }
    /**
     * AppPage 构造函数
     */
    win.AppPage.prototype.constructor = win.AppPage;

    /**
     * 通过 Ajax POST 请求获得 Html 页面
     * @param {String} url: 请求 URL
     * @param {Object} data: 请求数据
     * @param {function} successCallback: 成功回调函数
     * @param {function} errorCallback: 失败回调函数
     * @param {Object} remainOptions 剩余请求参数
     * @return None
     */
    win.AppPage.prototype.getHtml = function(url, data, successCallback, errorCallback, remainOptions) {
        var options = {};
        options.url = url;
        options.method = 'GET';
        options.datatype = 'text/html';
        if (data != undefined && data != null) options = Object.assign(options, {data: data});
        if (successCallback != undefined && successCallback != null) options = Object.assign(options, {successCallback: successCallback});
        if (errorCallback != undefined && errorCallback != null) options = Object.assign(options, {errorCallback: errorCallback});
        if (remainOptions != undefined && remainOptions != null) options = Object.assign(options, remainOptions);
        this.ajaxRequest(options);
    }
    /**
     * 通过 Ajax GET 请求获得 Html 页面
     * @param {String} url: 请求 URL
     * @param {Object} data: 请求数据
     * @param {function} successCallback: 成功回调函数
     * @param {function} errorCallback: 失败回调函数
     * @param {Object} remainOptions 剩余请求参数
     * @return None
     */
    win.AppPage.prototype.postHtml = function(url, data, successCallback, errorCallback, remainOptions) {
        var options = {};
        options.url = url;
        options.method = 'POST';
        options.datatype = 'text/html';
        if (data != undefined && data != null) options = Object.assign(options, {data: data});
        if (successCallback != undefined && successCallback != null) options = Object.assign(options, {successCallback: successCallback});
        if (errorCallback != undefined && errorCallback != null) options = Object.assign(options, {errorCallback: errorCallback});
        if (remainOptions != undefined && remainOptions != null) options = Object.assign(options, remainOptions);
        this.ajaxRequest(options);
    }
    /**
     * 通过 Ajax POST 请求获得 data 数据并渲染
     * @param {String} url: 请求 URL
     * @param {Object} data: 请求数据
     * @param {function} successCallback: 成功回调函数
     * @param {function} errorCallback: 失败回调函数
     * @param {Object} remainOptions 剩余请求参数
     * @return None
     */
    win.AppPage.prototype.get = function(url, data, successCallback, errorCallback, remainOptions) {
        var options = {};
        options.url = url;
        options.method = 'GET';
        options.datatype = 'json';
        if (data != undefined && data != null) options = Object.assign(options, {data: data});
        if (successCallback != undefined && successCallback != null) options = Object.assign(options, {successCallback: successCallback});
        if (errorCallback != undefined && errorCallback != null) options = Object.assign(options, {errorCallback: errorCallback});
        if (remainOptions != undefined && remainOptions != null) options = Object.assign(options, remainOptions);
        this.ajaxRequest(options);
    }
    /**
     * 通过 Ajax GET 请求获得 data 数据并渲染
     * @param {String} url: 请求 URL
     * @param {Object} data: 请求数据
     * @param {function} successCallback: 成功回调函数
     * @param {function} errorCallback: 失败回调函数
     * @param {Object} remainOptions 剩余请求参数
     * @return None
     */
    win.AppPage.prototype.post = function(url, data, successCallback, errorCallback, remainOptions) {
        var options = {};
        options.url = url;
        options.method = 'POST';
        options.datatype = 'json';
        if (data != undefined && data != null) options = Object.assign(options, {data: data});
        if (successCallback != undefined && successCallback != null) options = Object.assign(options, {successCallback: successCallback});
        if (errorCallback != undefined && errorCallback != null) options = Object.assign(options, {errorCallback: errorCallback});
        if (remainOptions != undefined && remainOptions != null) options = Object.assign(options, remainOptions);
        this.ajaxRequest(options);
    }
    /**
     * 通过 Ajax 请求获得 Html 页面
     * @param {String} method: Http 请求方法
     * @param {Object} options 请求头部
     * @return None
     */
    win.AppPage.prototype.ajaxRequest = function (options) {
        options.timeout = (options.timeout != undefined) ? options.timeout : this.requestTimeout;
        var httpreq = new http(options);
        (options.method == 'POST') ? httpreq.post() : httpreq.get();
    }
    /**
     * 通过 page 设置初始化 data
     * @param {Object} options
     * @return None
     */
    win.AppPage.prototype.setData = function(data) {this.data = data};
    /**
     * 通过 page 获取初始化 data
     * @return {Object}
     */
    win.AppPage.prototype.getData = function() {return this.data}
    /**
     * 超时请求执行事件
     * @param {Integer} timeoutInSec: 以秒为单位
     * @param {function} fnEvent: 事件函数
     * @param {Object} data: 事件输入数据
     * @param None
     */
    win.AppPage.prototype.executeTimeoutEvent = function(timeoutInSec, fnEvent, data) {
        setTimtout(function(data) {fnEvent.apply(data);}, timeoutInSec * 1000);
    }
    /**
     * 单个执行请求确认按钮
     * @param {String} message: 展示消息
     * @param {String} url: 请求URL
     * @return None
     */
    win.AppPage.prototype.singleConfirm = function(message, url) {
        var singleConfirm = function() {
            this.get(url, {},
                function(data) {
                    MessageBox.Warnning(data.message);
                    if (data.code) this.executeTimeoutEvent(2, window.location.reload(), {});
                },
                function() {
                    MessageBox.Error('请求出现错误,请检查');
                }
            )
        }
        MessageBox.Confirm(message, {}, singleConfirm);
    }
})(window)
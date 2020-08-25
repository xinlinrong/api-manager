"use strict"
require('./HttpRequest')

/**
 * 普通表单处理器
 */
 var FormHandler;
 (function(){
    /**
     *表单提交类
     */
    FormHandler = function(form) {
        _self = this;
        
        /**
         * 调用普通数据
         */
        _self._commonData = null;
        
        /**
         * 调用成功回调方法
         */
        _self._successCallback = null;

       /**
        * 调用失败回调方法
        */
        _self._errorCallback = null;

       /**
        * 跳转页面
        */
        _self._redirectUrl = null;

        /**
         * 跳转间隔时间, 单位秒
         */
        _self.redirectTimeout = 3;

        /**
         * 表单
         */
        _self._form = null;

       /**
        * 表单请求地址
        */
        _self.action = null;

        /**
         * 表单请求方法
         */
        _self.method = 'post';

        if (form && typeof(form) == 'object') {
            var _form = $(form);
            if (_form[0].tagName === 'FORM') {
                _self.action = _form.attr('action');
                _self.method = _form.attr('method');
            }
        }
    }

    FormHandler.prototype = {
        /**
         * 构造函数
         */
        constructor: FormHandler

        /**
        * 设置普通数据
         */
        , setCommonData = function(commonData) {
            self._commonData = commomData;
            return self;
        }

        /**
         * 设置请求成功后的回调函数
         */
        , setSuccessCallback(successCallback) {
            self._successCallback = successCallback;
            return self;
        }

        /**
         * 设置请求失败后的回调函数
         */
         , setErrorCallback(errorCallback) {
            self._errorCallback = errorCallback;
            return self;
        }

        /**
         * 设置跳转地址 URL
         */
        , setRedirectUrl(redirectUrl) {
            self._redirectUrl = redirectUrl;
            return self;
        }

        /**
         * 超时时间设置, 单位秒
         */
        , setRedirectTimeout(timeOut) {
            self.redirectTimeout = timeout;
        }
    }
})();
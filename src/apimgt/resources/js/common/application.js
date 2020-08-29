/**
 * JS Application 应用类
 */
(function(win){
    win.Application = function(config) {this.config = config}

    /**
     * 构造函数
     * @param None
     * @return None 
     */
    win.Application.prototype.constructor = win.Application

    /**
     * 获取当前URL
     * @param None
     * @return String
     */
    win.Application.prototype.getCurrentUrl = function() {return window.location.href};

    /**
     * 获取配置信息
     * @param None
     * @return Object
     */
    win.Application.prototype.getConfigObject = function() {return this.config}

    /**
     * 获取配置信息
     * @param String
     * @return String
     */
    win.Application.prototype.getConfigObjectByKey = function(key) {return (this.config.hasOwnProperty(key)) ? this.config.key : null}
})(window)
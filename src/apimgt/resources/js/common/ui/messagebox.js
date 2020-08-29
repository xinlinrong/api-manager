(function(win) {
    /**
     * 消息盒子
     */
    MessageBox = {};
    
    /**
     * @method getValueFormOptions
     * @param {Object} options
     * @param {String} name
     * @param {mixed} defaultValue
     * @return mixed
     */
    var getValueFormOptions = function(options, name, defaultValue) {
        if (typeof(options) === 'object') {
            return ((options[name] != undefined) ? options[name] : defaultValue);
        }
        return null;
    }

   /**
     * 弹出消息盒子
     * @param {String} message: 消息展示
     * @param {Object} options: 消息盒子展示配置
     * @return {Integer} Index: 消息盒子的索引
     */
    MessageBox.Info = function(message, options) {
        var myOptions = Object.assign({}, options);
        myOptions.title = getValueFormOptions(myOptions, 'title', ['消息', 'font-size:18px;']);
        myOptions.area = getValueFormOptions(myOptions, 'area', ['25%', '25%']);
        myOptions.icon = getValueFormOptions(myOptions, 'icon', -1);
        myOptions.fixed = getValueFormOptions(myOptions, 'fixed', true);
        myOptions.resize  = getValueFormOptions(myOptions, 'resize', false);
        myOptions.move  = getValueFormOptions(myOptions, 'move', false);

        var domElement = document.createElement('div');
        domElement.setAttribute('style', 'text-align:center;');
        domElement.innerHTML = message;
        return layer.alert(domElement.outerHTML, myOptions);
    }

   /**
     * 弹出展示成功消息盒子
     * @param {String} message: 消息展示
     * @param {Object} options: 消息盒子展示配置
     * @return {Integer} Index: 消息盒子的索引
     */
    MessageBox.Success = function(message, options) {
        var myOptions = Object.assign({icon:1}, options);
        myOptions.title = getValueFormOptions(myOptions, 'title', ['成功', 'font-size:18px;']);
        return MessageBox.Info(message, myOptions);
    }

   /**
     * 弹出展示失败消息盒子
     * @param {String} message: 消息展示
     * @param {Object} options: 消息盒子展示配置
     * @return {Integer} Index: 消息盒子的索引
     */
    MessageBox.Error = function(message, options) {
        var myOptions = Object.assign({icon:2}, options);
        myOptions.title = getValueFormOptions(myOptions, 'title', ['失败', 'font-size:18px;']);
        return MessageBox.Info(message, myOptions);
    }

   /**
     * 弹出展示警告消息盒子
     * @param {String} message: 消息展示
     * @param {Object} options: 消息盒子展示配置
     * @return {Integer} Index: 消息盒子的索引
     */
    MessageBox.Warnning = function(message, options) {
        var myOptions = Object.assign({icon:3}, options);
        myOptions.title = getValueFormOptions(myOptions, 'title', ['警告', 'font-size:18px;']);
        return MessageBox.Info(message, myOptions);
    }

   /**
     * 弹出展示确认执行消息盒子
     * @param {String} message: 消息展示
     * @param {Object} options: 消息盒子展示配置
     * @param {function} confirmCallable: 执行的方法
     * @return {Integer} Index: 消息盒子的索引
     */
    MessageBox.Confirm = function(message, options, confirmCallable) {
        var myOptions = Object.assign({icon:3}, options);
        myOptions.title = getValueFormOptions(myOptions, 'title', ['确认', 'font-size:18px;']);
        myOptions.area = getValueFormOptions(myOptions, 'area', ['30%', '25%']);
        myOptions.btn = getValueFormOptions(myOptions, 'btn', ['确定', '取消']);
        myOptions.yes = function(index, layero) {
            setTimeout(function(){confirmCallable.apply()}, 1000); // 设定 1 秒后执行
            layer.close(index);
        }
        return MessageBox.Info(message, myOptions);
    }

   /**
     * 弹出展示加载消息盒子
     * @param {String} timeout: 加载时间
     * @param {Object} options: 消息盒子展示配置
     * @return {Integer} Index: 消息盒子的索引
     */
    MessageBox.loading = function(timeout, options) {
        var myOptions = Object.assign({}, options);
        myOptions.icon = getValueFormOptions(myOptions, 'icon', 2);
        myOptions.time = (timeout != undefined) ? timeout * 1000 : timeout * 1000;
         return layer.load(1, myOptions);
    }

   /**
     * 关闭消息盒子
     * @param {String} index: 消息盒子的索引
     * @return None
     */
    MessageBox.close = function(index) {layer.close(index);}
    win.MessageBox = MessageBox;
})(window)
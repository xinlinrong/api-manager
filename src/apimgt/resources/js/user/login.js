/**
  * 登录页
  */
(function(win){
    win.Application.prototype.register = function() {
        this.registerVerity();
        this.registerLogin();
    }

    // 注册表单登录验证
    win.Application.prototype.registerVerity = function() {
        layui.form.verify({
            account: function(value, item) {
                 if (value.length == 0) return '请输入帐户名称';
             },
             password: function(value, item) {
                 if (value.length == 0) return '请输入密码';
                 if (value.length < 6 || value.length > 20) return '密码长度为6-20位字符或数字';
            }
        });
    }

    // 注册登录操作
    win.Application.prototype.registerLogin = function() {
        // 提交表单事件
        layui.form.on('submit(User-login)', function(data) {
            data.field.password = md5(data.field.password)
            new HttpRequestHandler(
                new HttpPostRequest({
                    requesturl: "/passport/doLogin",
                    data: data.field,
                    dataType: 'json'
                }),
                function(data) {
                    alert('登录成功');
                    layui.
                },
                function() {
                    alert('登录失败');
                }
            ).execute();
        });
    }

    $app = new win.Application();
    $app.register();
})(window);
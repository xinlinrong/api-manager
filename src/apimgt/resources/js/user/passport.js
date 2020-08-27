/**
 * 定义 Passport
 */
(function(){
    /**
     * 登录页
     */
    var LoginPageHandler;
    LoginPageHandler = function() {
        // 表单登录验证
        layui.form.verify({
            account: function(value, item) {
                 if (value.length == 0) {
                     return '请输入帐户名称';
                 }
             },
             password: function(value, item) {
                 if (value.length == 0) {
                     return '请输入密码';
                 }
                 if (value.length < 6 || value.length > 20) {
                     return '密码长度为6-20位字符或数字';
                 }
            }
        });        
        // 提交表单事件
        layui.form.on('submit(User-login)', function(data) {
            new HttpRequestHandler(
                new HttpPostRequest({
                    requesturl: '{{url("/passport/doLogin")}}',
                    data: data.field,
                    dataType: 'json'
                }),
                function(data) {
                    alert('登录成功');
                },
                function() {
                    alert('登录失败');
                }
            ).execute();
        });
    }
    LoginPageHandler.prototype.constructor = LoginPageHandler;
})();
@extends('layouts/default/main')
@section('scripts')
<script src="{{asset('js/passport/passport.js')}}"></script>
<script>
(function() {
    layui.use(['layer', 'form', 'jquery'], function() {
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
         layui.form.on('submit(User-login)', function(data){
             alert('hahahha');
         });
    });
})();
</script>
@endsection

@section('title', '项目 API 管理系统登录')
@section('content')
    @parent
        <div class="login-form-box">
            <div class="login-form-box-header"><h2>API 管理系统</h2></div>
            <div class="layui-form"  method="POST"  action="/passport/login">
                <div class="layui-form-item">
                    <label class="layui-form-label-fixed layui-icon  layui-icon-username"  for="user-login-account"></label>
                    <input type="text"  name="account"  id="user-login-account" placeholder="请输入账户名"  autocomplete="off"  class="layui-input"  lay-verify="account"  style="padding-left:38px;">
                 </div>
                <div class="layui-form-item">
                    <label class="layui-form-label-fixed layui-icon  layui-icon-password"  for="user-login-password"></label>
                    <input type="password"  name="password"  id="user-login-password"  placeholder="请输入密码"  autocomplete="off" class="layui-input"  lay-verify="password" style="padding-left:38px;">
                 </div>
                <div class="layui-form-item">
                    <input type="checkbox"  name="rememberme"  title="记住我"  lay-skin="primary"  value="1"/>
                    <div class="layui-unselect layui-form-checkbox"  lay-skin="primary">
                        <i class="layui-icon layui-icon-ok"></i>
                    </div>
                 </div>
                <div class="layui-form-item">
                    <a class="layui-btn layui-btn-fluid"  lay-submit lay-filter="User-login">登录</a>
                </div>
            </div>
        </div>
<style>
body {
    background-color: #DDD;
}

.login-form-box  {
    width: 15%;
    height: 20%;
    margin: 13% auto ;
    padding: 40px;
    border: 1px solid #DDD;
    background-color: white;
    border-radius: 5px;
}

.layui-form-label-fixed {
    position: absolute;
    text-align: center;
    display: block;
    width: 38px;
    line-height: 36px;
    color: #d2d2d2;
}

.login-form-box .login-form-box-header  {
    text-align: center;
    padding: 15px;;
}
</style>
@endsection
@extends('layouts/default/main')
@section('scripts')
    <!-- 处理 login logout 的事件 -->
    <script src="{{asset('js/user/passport.js')}}"></script>
    <script>(function(){new LoginPageHandler()})()</script>
@endsection
@section('title', '项目 API 管理系统登录')
@section('content')
    @parent
        <div class="login-form-container">
            <h1>API 管理系统</h1>
            <div class="login-form-box">
                <div class="login-form-box-header"><strong>用户登录</strong></div>
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
        </div>
<style>
body {
    background-color: #DDD;
}

.login-form-container {
    margin: 13% auto ;
}

.login-form-container>h1 {
    text-align: center;
    display: block;
    font-size: 35px;
    font-weight: 300;
    margin-bottom: 20px;
}

.login-form-box  {
    width: 15%;
    height: 20%;
    margin: auto ;
    padding: 30px;
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
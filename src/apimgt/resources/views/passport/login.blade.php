@extends('layouts/default/main')
@section('title', '项目 API 管理系统登录')
@section('content')
    @parent
        <div class="login-form-box">
            <div class="login-form-box-header"><h2>项目 API 管理系统</h2></div>
            <form class="layui-form"  method="POST"  action="/passport/login">
                <div class="layui-form-item">
                    <label class="layui-form-label-fixed layui-icon  layui-icon-username" ></label>
                    <div class="layui-input-block layout-input-block-fixed">
                        <input type="text"  name="account"  placeholder="请输入账户名"  autocomplete="off"  class="layui-input">
                    </div>
                 </div>
                <div class="layui-form-item">
                    <label class="layui-form-label-fixed layui-icon  layui-icon-password"></label>
                    <div class="layui-input-block layout-input-block-fixed">
                        <input type="password"  name="password"  placeholder="请输入密码"  autocomplete="off" class="layui-input">
                    </div>
                 </div>
                <div class="layui-form-item">
                    <input type="checkbox"  name="rememberme"  title="记住我"  lay-skin="primary"  value="1"/>
                    <div class="layui-unselect layui-form-checkbox"  lay-skin="primary">
                        <i class="layui-icon layui-icon-ok"></i>
                    </div>
                 </div>
                <div class="layui-form-item">
                    <button  class="layui-btn layui-btn-fluid"  lay-submit>登录</button>
                </div>
            </form>
        </div>
<style>
body {
    background-color: #DDD;
}

.login-form-box  {
    width: 15%;
    height: 20%;
    margin: 13% auto ;
    padding: 50px;
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

.layout-input-block-fixed  {
    margin-left: 0px;
    padding-left: 38px;
    border: 1px solid #DDD;
}

.layout-input-block-fixed >input {
    padding-left: 0px;
    border: none;
}

.login-form-box .login-form-box-header  {
    text-align: center;
    padding: 20px;
}
</style>
@endsection
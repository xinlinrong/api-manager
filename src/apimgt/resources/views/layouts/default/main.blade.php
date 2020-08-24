<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8;">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <link href="{{asset('js/layui/css/layui.css')}}"  rel="stylesheet" >
    </head>
    <body>
        <div class="container">
            <div class="header"></div>
            <div class="content">@yield('content')</div>
            <div class="footer">@yield('footer')</div>
        </div>
        <script src="{{asset('/js/layui/layui.js')}}"></script>
        <script type="text/javascript">
            layui.use(['layer', 'form', 'jquery'], function(){
                var layer = layui.layer;
                var form = layui.form;
                var $ = layui.jquery;
            });
        </script>
    </body>
</html>
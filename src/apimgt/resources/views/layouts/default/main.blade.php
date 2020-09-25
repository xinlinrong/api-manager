<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8;">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <link href="{{asset('/js/layui/css/layui.css')}}"  rel="stylesheet" >
    </head>
    <body class="layui-layout-body">
        <div class="layui-layout layui-layout-admin">@yield('content')</div>
        <script src="{{asset('/js/app.js')}}"></script>
        <script src="{{asset('/js/layui/layui.all.js')}}"></script>
        <script src="{{asset('/js/common/http.js')}}"></script>
        <script src="{{asset('/js/common/ui/messagebox.js')}}"></script>
        <script src="{{asset('/js/common/application.js')}}"></script>
        <script src="{{asset('/js/common/page.js')}}"></script>
        <script type="text/javascript">(function(win){ win. _app = new Application()})(window)</script>
        <script type="text/javascript">(function(win){ win. _page = new AppPage()})(window)</script>
@yield('scripts')
    </body>
</html>
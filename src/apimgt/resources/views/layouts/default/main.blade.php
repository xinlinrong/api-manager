<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8;">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <link href="{{asset('/js/layui/css/layui.css')}}"  rel="stylesheet" >
    </head>
    <body>
        <div class="container">
            <div class="header"></div>
            <div class="content">@yield('content')</div>
            <div class="footer">@yield('footer')</div>
        </div>
        <script src="{{asset('/js/app.js')}}"></script>
        <script src="{{asset('/js/layui/layui.all.js')}}"></script>
        <script src="{{asset('/js/common/http.js')}}"></script>
        <script src="{{asset('/js/common/application.js')}}"></script>
       <script>
           $app = new Application();
       </script>
        @yield('scripts')
    </body>
</html>
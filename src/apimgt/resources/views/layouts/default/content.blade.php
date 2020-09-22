@extends('layouts/default/main')

<!-- content 内容 s -->
@section('content-wrapper')
@include('layouts.default.header')
@include('layouts.default.aside')
@yield('content_main')
@include('layouts.default.footer')
@endsection
<!-- content 内容 e -->
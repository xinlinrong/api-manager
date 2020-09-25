@extends('layouts/default/main')
@section('content')
    @include('layouts.default.header')
    @include('layouts.default.aside')
    @yield('content-main')
    @include('layouts.default.footer')
@endsection
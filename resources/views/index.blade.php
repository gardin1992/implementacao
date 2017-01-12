<!-- Stored in resources/views/child.blade.php -->

@extends('layouts.home')

@section('title', 'Home')

@section('content')

    @foreach ($files as $file)
        <ul>
            <li data-url="{{ $file['url'] }}">{{ $file['name'] }}</li>
        </ul>
    @endforeach

    @include('partials.playermsdn')
    
@endsection
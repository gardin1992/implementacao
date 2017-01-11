<!DOCTYPE html>
<html lang="pt-br">
<head>

<meta charset="utf-8">

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">

<title>@yield('title') - {{ config('app.name', 'Laravel') }}</title>

<!-- Styles -->
<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="/public/css/app.css">

<!-- Scripts -->
<script>
	window.Laravel = <?php echo json_encode([
    	'csrfToken' => csrf_token(),
    ]); ?>
</script>

</head>
<body>

@include('partials.navbar')

<div class="container">
	 @yield('content')
</div>

<!-- Inline Scripts -->
<script src="/public/js/lib/dash.all.min.js"></script>
<script data-main="/public/js/app.js" src="/bower_components/requirejs/require.js"></script>

</body>
</html>
<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="utf-8">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Player mp4box</title>

    <!-- Styles -->
    <link rel="stylesheet" href="/bower_components/jquery-ui/themes/base/jquery-ui.min.css">
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">

    <style>

        video {
            width: 700px;
        }

    </style>
    <!-- Scripts -->

</head>
<body>

<?php include_once VIEWS . '/partials/navbar.php'; ?>

<div class="container-fluid">
    <?php include_once VIEWS . '/partials/mp4box.php'; ?>
</div>

<!-- Inline Scripts -->
<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<script src="/bower_components/jquery-ui/jquery-ui.min.js"></script>
<script src="/public/js/lib/mp4box.all.min.js"></script>
<script src="/public/js/modules/dash/downloader.js"></script>
<script src="/public/js/modules/dash/sample-urls.js"></script>
<script src="/public/js/modules/dash/movieInfoDisplay.js"></script>
<script src="/public/js/modules/dash/index.js"></script>

</body>
</html>
<?php

define('VIEWS', __DIR__ . '/views/');

$baseDir = __DIR__ . '/uploads';

$iterator = new \RecursiveDirectoryIterator($baseDir);
$recursiveIterator = new \RecursiveIteratorIterator($iterator);

$files = [];

foreach ( $recursiveIterator as $entry ) {

    if ($entry->getFilename() != "." && $entry->getFilename() != "..") {
        $files[] = [
            'url' => $entry->getPath() . '/' . $entry->getFilename(),
            'name' => $entry->getFilename()
        ];
    }

}

include_once VIEWS . 'index.php';
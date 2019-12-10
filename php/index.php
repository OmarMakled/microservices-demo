<?php

/**
 * Set header
 */
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

$data = [
    ['id' => 1, 'name' => 'foo'],
    ['id' => 2, 'name' => 'bar'],
];

echo json_encode($data);

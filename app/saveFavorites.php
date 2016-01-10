<?php
$json = file_get_contents('php://input');
$data = json_decode($json);
$currArray = file_get_contents('favorites.json');
$array = json_decode($currArray, true);
array_push($array, $data);

file_put_contents('favorites.json', json_encode($array, JSON_FORCE_OBJECT));
?>
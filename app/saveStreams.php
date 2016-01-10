<?php
$json = file_get_contents('php://input');
$data = json_decode($json, true);


file_put_contents('streams.json', json_encode($data, JSON_FORCE_OBJECT));
?>
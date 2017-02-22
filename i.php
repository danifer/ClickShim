<?php 

  $rawData = file_get_contents('php://input');

  if ($obj = json_decode($rawData)) {

    $obj->data = getData($obj->input);

    $target = "incoming.txt";
    file_put_contents($target, print_r($obj,1), FILE_APPEND);
    file_put_contents($target, "\n", FILE_APPEND);
  }

  function getData($string) {

    if ($obj = json_decode(substr($string, 4, -3))) {
      
      return $obj;
    }

    return null;
  }

  exit;

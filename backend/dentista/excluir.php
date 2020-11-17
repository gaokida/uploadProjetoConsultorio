<?php

require_once("../conexao.php");

    $id = filter_input(INPUT_GET,'id');

$deleta = "DELETE FROM dentista ";
$deleta .= "WHERE id = {$id}";

$resul = mysqli_query($conexao,$deleta);

if(!$resul){
    die("ERRO NA EXCLUSÃO");
}


?>
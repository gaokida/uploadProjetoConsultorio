<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    require_once("../conexao.php");
    $nome = filter_input(INPUT_POST,'nome');
    $cro = filter_input(INPUT_POST,'cro');
    $telefone = filter_input(INPUT_POST, 'telefone');

    $inserir = "INSERT INTO dentista (nome, cro, telefone) ";
    $inserir .= " VALUES ('$nome', '$cro', '$telefone')";

    echo $inserir;
    $conecta = mysqli_query($conexao,$inserir); 

?>
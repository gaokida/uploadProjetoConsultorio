<?php

    require_once("../conexao.php");

    $nome = filter_input(INPUT_POST, 'nome');
    $telefone = filter_input(INPUT_POST, 'telefone');

    $inserir = "INSERT INTO cliente (nome, telefone) ";
    $inserir .=" VALUES('$nome', '$telefone')";

    $conecta = mysqli_query($conexao,$inserir);
    

?>
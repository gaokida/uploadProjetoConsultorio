<?php
    require_once("../conexao.php");

    $id = filter_input(INPUT_GET,'id');
    $excluir = "DELETE FROM cliente ";
    $excluir .=" WHERE id = $id";

    $conecta = mysqli_query($conexao,$excluir);
    if(!$conecta){
        die("ERRO NA EXCLUSAO !!");
    }


?>
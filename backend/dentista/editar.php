<?php
    require_once("../session.php");
    require_once("../conexao.php");
    $id = filter_input(INPUT_POST, 'id');
    $nome = filter_input(INPUT_POST,'nome');
    $cro = filter_input(INPUT_POST, 'cro');
    $telefone = filter_input(INPUT_POST,'telefone');

    $editar = "UPDATE dentista SET ";
    $editar .= " nome = '$nome', cro = '$cro', telefone ='$telefone' ";
    $editar .= " WHERE id = $id";

    mysqli_query($conexao,$editar);
?>
<?php
    require_once("../session.php");
    require_once("../conexao.php");

    $id = filter_input(INPUT_POST,'id');
    $data_consulta = filter_input(INPUT_POST, 'data_consulta');
    $id_cliente = filter_input(INPUT_POST,'id_cliente');
    $id_dentista = filter_input(INPUT_POST,'id_dentista');

    $editar = "UPDATE consulta SET ";
    $editar .=" data_consulta ='$data_consulta', id_cliente = '$id_cliente', id_dentista = '$id_dentista'";
    $editar .=" WHERE id =$id";

    $resul = mysqli_query($conexao,$editar);


?>
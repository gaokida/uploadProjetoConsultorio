<?php
    require_once("../conexao.php");

    $id = filter_input(INPUT_GET,'id');

    $excluir = "DELETE FROM consulta ";
    $excluir .=" WHERE id = $id";

    $resul = mysqli_query($conexao,$excluir);

    if(!$resul){
        die("ERROOOOO !!");
    }

?>
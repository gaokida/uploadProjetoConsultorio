<?php
    require_once("../conexao.php");

    $id = filter_input(INPUT_GET,'id');

    $consulta = "SELECT * FROM consulta ";
    $consulta .=" WHERE id = {$id}";
    $resul = mysqli_query($conexao,$consulta);


    if(!$resul){
        die("ERRO NO BANCO");
    }

    while($a = mysqli_fetch_array($resul)){
        echo json_encode(["id" => $a['id'],
        "data_consulta" => $a['data_consulta'],
        "id_cliente" => $a['id_cliente'],
        "id_dentista" => $a['id_dentista']]);
    }


?>
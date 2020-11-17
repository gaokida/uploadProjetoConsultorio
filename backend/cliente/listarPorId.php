<?php
    require_once("../conexao.php");
    $cliente_id = filter_input(INPUT_GET,"id");
    $consulta = "SELECT * FROM cliente ";
    $consulta .=" WHERE id = {$cliente_id}";

    $result = mysqli_query($conexao,$consulta);

    if(!$result){
        die("ERRO NO BANCO");
    }

    while($a = mysqli_fetch_array($result)){
        echo json_encode(["id"=> $a['id'],
                            "nome" => $a['nome'],
                            "telefone" => $a["telefone"] ]);
    }


?>
<?php

require_once("../session.php");
    require_once("../conexao.php");

    $consulta = "SELECT * FROM cliente ";
    $conecta = mysqli_query($conexao,$consulta);

    if(!$conecta){
        die("ERRO NO BANCO");
    }

    $cliente = [];
    while($a = mysqli_fetch_array($conecta)){
        $cliente[]=[
            "id" => $a ['id'],
            "nome" => $a['nome'],
            "telefone" =>$a['telefone']
        ];
    }
    echo json_encode($cliente);
?>
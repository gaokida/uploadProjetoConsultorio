<?php
    require_once("../conexao.php");

    $consulta = "SELECT * FROM dentista";

    $resul= mysqli_query($conexao,$consulta);

    if(!$resul){
        die("erro no banco");
    }

    $dentista = [];
    while($a = mysqli_fetch_array($resul)){
        $dentista[] =[
            "id" => $a['id'],
            "nome" => $a['nome'],
            "cro" => $a['cro'],
            "telefone" => $a['telefone']
        ];
    }
        echo json_encode($dentista);
?>
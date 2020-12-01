<?php
    require_once("../session.php");
    require_once("../conexao.php");

    $listar = "select d.nome as dentista, cl.nome as cliente, c.*from consulta c ";
    $listar .=" inner join cliente cl on cl.id = c.id_cliente ";
    $listar .=" inner join dentista d on d.id = c.id_dentista ";

    $resul = mysqli_query($conexao,$listar);

    if(!$resul){
        die ("ERRO NO BANCO");
    }

    $consulta = [];

    while($a = mysqli_fetch_array($resul)){
        $consulta[] =[ 
                        "id" => $a ['id'],
                        "data_consulta" => $a['data_consulta'],
                        "cliente" => $a['cliente'],
                        "dentista" => $a['dentista']
                    ]; 
    }
    echo json_encode($consulta);


?>
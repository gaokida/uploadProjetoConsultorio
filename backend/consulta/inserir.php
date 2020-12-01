<?php
    require_once("../session.php");
    require_once("../conexao.php");
    $data_consulta = filter_input(INPUT_POST, 'data_consulta');
    $id_cliente = filter_input(INPUT_POST, 'id_cliente');
    $id_dentista = filter_input(INPUT_POST, 'id_dentista');

    $inserir = "INSERT INTO consulta (data_consulta, id_cliente, id_dentista) ";
    $inserir .=" VALUES ('$data_consulta','$id_cliente','$id_dentista' )";
    $resul = mysqli_query($conexao,$inserir);

    

    if(!$resul){
        die("erro !!");
    }

?>
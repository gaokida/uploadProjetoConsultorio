<?php

require_once('../conexao.php');

session_start();

if( isset($_GET["usuario"])){
    $usuario = filter_input(INPUT_GET,'usuario');
    $senha = filter_input(INPUT_GET,'senha');

    $entrar = "SELECT * ";
    $entrar .=" FROM usuario ";
    $entrar .=" WHERE usuario = '{$usuario}' and senha = '{$senha}' ";

    $acesso = mysqli_query($conexao, $entrar);
    if(!$acesso){
        die("Falha na consulta ao banco");
    }
    $info = mysqli_fetch_assoc($acesso);
    if(empty($info)){
        echo json_encode( false);
    }else{
        $_SESSION["user_portal"] = $info["id"];
        echo json_encode( true);
    }

}

?>


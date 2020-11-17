<?php
require_once("../conexao.php");
$id = filter_input(INPUT_GET,'id');

$consulta = "SELECT * FROM dentista ";
$consulta .=" WHERE id = {$id}";

$result = mysqli_query($conexao,$consulta);

if(!$result){
    die("ERRO no Banco");
}

while($a = mysqli_fetch_array($result)){
    echo json_encode(["id" => $a['id'],
                      "nome"=> $a['nome'],
                      "cro" => $a['cro'],
                      "telefone" => $a['telefone']]);
}

?>
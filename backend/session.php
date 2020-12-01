<?php
session_start();
if(!isset($_SESSION['user_portal'])){
    echo("Não autorizado !!");
    die("ERRO !!!");
}

?>
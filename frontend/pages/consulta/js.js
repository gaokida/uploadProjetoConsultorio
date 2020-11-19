$(function(){
    read();
    $.getJSON("http://localhost/consultorio/backend/cliente/listar.php", function(data){
        var html = "<option value='0' > Selecione </option>";
        data.forEach(cliente =>{
            html += '<option value ="'+cliente.id+'">' +cliente.nome+ '</option>';
        });
        $("#id_cliente").append(html);
    })
    $.getJSON("http://localhost/consultorio/backend/dentista/listar.php", function(data){
        var html ="<option value='0' > Selecione </option>";
        data.forEach(dentista =>{
            html +='<option value="'+dentista.id+'">'+dentista.nome+'</option>';
        });
        $("#id_dentista").append(html);
    })
})

function read(){
    $.getJSON('http://localhost/consultorio/backend/consulta/listar.php', function (data){
    var html;

    data.forEach(consulta =>{
        html+= "<tr>"+
        "<td>" + consulta.id +"</td>"+
        "<td>" + consulta.data_consulta + "</td>" +
        "<td>" + consulta.cliente + "</td>" +
        "<td>" + consulta.dentista +"</td>" +
        "<td>" +
        "<button type ='button' class='btn btn-primary btn-sm alterar mr-1' id='alterar" + consulta.id +
        "'>Alterar <i class='far fa-edit'></i></button>"+
        "<button type ='button' class='btn btn-danger excluir btn-sm' id='"+ consulta.id +
        "'>Excluir <i class='far fa-trash-alt'></i></button></td>"
        "</tr>";
    })
    $("tbody").html(html);
    })// fim listar.php

}

$(document).on("click",".alterar", function(event){
    event.preventDefault()
    var id = this.id.replace("alterar","");
    $.getJSON("http://localhost/consultorio/backend/consulta/listarPorId.php?id=" +id, function (consulta){
        $("#id").val(consulta.id);
        $("#data_consulta").val(consulta.data_consulta);
        $("#id_cliente").val(consulta.id_cliente);
        $("#id_dentista").val(consulta.id_dentista);
        $("#salvar").hide();
        $("#alterar").show();

    })
})

$("#salvar").on("click", function(event){
    event.preventDefault();
    var data_consulta = $("#data_consulta").val();
    var id_cliente = $("#id_cliente").val();
    var id_dentista = $("#id_dentista").val();
    $.post("http://localhost/consultorio/backend/consulta/inserir.php",{
        "data_consulta" : data_consulta,
        "id_cliente" : id_cliente,
        "id_dentista" : id_dentista},function(data){
            read();
            $("form").trigger("reset");
        })  
})

$("#alterar").on("click", function(event){
    event.preventDefault();
    var data_consulta = $("#data_consulta").val();
    var id_cliente = $("#id_cliente").val();
    var id = $("#id").val();
    var id_dentista = $("#id_dentista").val();
    $.post("http://localhost/consultorio/backend/consulta/editar.php",{id:id, data_consulta:data_consulta, id_cliente:id_cliente, id_dentista:id_dentista}, function(data){
        read();
        $("#alterar").hide();
        $("#salvar").show();
        $("form").trigger("reset");
    })
})

$(document).on("click",".excluir", function(event){
    event.preventDefault();
    var id = this.id
    var excluir = confirm("Deseja excluir?");
    if(excluir){
        $.get("http://localhost/consultorio/backend/consulta/excluir.php?id="+id, function(data){
            read();
        });
    }
})

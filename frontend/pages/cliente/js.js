$(function(){
    read();

    $("#salvar").on("click", function(event){
        event.preventDefault();
        var nome =$("#nome").val();
        var telefone = $("#telefone").val();
        $.post("http://localhost/consultorio/backend/cliente/inserir.php",
        {"nome":nome, "telefone":telefone},function(data){
            read();
            $("form").trigger("reset");

        })
    })//fim inserir
    $("#alterar").on("click", function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var id = $("#id").val();
        var telefone = $("#telefone").val();
        $.post("http://localhost/consultorio/backend/cliente/editar.php", {nome:nome, id:id, telefone:telefone},function(data){
            read();
            $("#alterar").hide();
            $("#salvar").show();
            $("form").trigger("reset");
        })
    })//fim editar
})

function read(){
    $.getJSON("http://localhost/consultorio/backend/cliente/listar.php", function(data){
        $("tbody").html("");
        data.forEach(cliente =>{
            var html ="<tr>"+
            "<td>" + cliente.id +"</td>" +
            "<td>" + cliente.nome + "</td>" +
            "<td>" + cliente.telefone +"</td>"+
            "<td>"+
            "<button type = 'button' class='btn btn-primary btn-sm alterar' id='alterar"+cliente.id+
            "'>Alterar</button>"+
            "<button type = 'button' class ='btn btn-danger excluir btn-sm' id='"+cliente.id+
            "'>Excluir</button></td>"
            "</tr>";
            $("tbody").append(html);
        });
    })//fim listar
}

$(document).on("click",".alterar", function(event){
    event.preventDefault();
    var id = this.id.replace("alterar","");
    $.getJSON("http://localhost/consultorio/backend/cliente/listarPorId.php?id="+id, function(cliente){
        $("#nome").val(cliente.nome);
        $("#id").val(cliente.id);
        $("#telefone").val(cliente.telefone);
        $("#salvar").hide();
        $("#alterar").show();
    });
})//fim listarPorId

$(document).on("click",".excluir", function(event){
    event.preventDefault();
    var id = this.id
    var excluir = confirm("DESEJA EXCLUIR ?");
    if(excluir)
    $.get("http://localhost/consultorio/backend/cliente/excluir.php?id="+id, function(data){
        read();

    })
})

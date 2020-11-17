$(function(){
    read();

    $("#salvar").on("click", function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var cro = $("#cro").val();
        var telefone = $("#telefone").val();
        $.post("http://localhost/consultorio/backend/dentista/inserir.php",
        {"nome": nome, "cro" : cro, "telefone" : telefone },function(data){
            read();
            $("form").trigger("reset");
        })
    })

    $("#alterar").on("click", function(event){
        event.preventDefault();
        var id = $("#id").val();
        var nome = $("#nome").val();
        var cro = $("#cro").val();
        var telefone = $("#telefone").val();
        $.post("http://localhost/consultorio/backend/dentista/editar.php",{nome:nome, id:id, cro:cro, telefone:telefone},function(data){
            read();
            $("#alterar").hide();
            $("#salvar").show();
            $("form").trigger("reset");
        })
    })

})


function read(){
    $.getJSON("http://localhost/consultorio/backend/dentista/listar.php", function(data){
        $("tbody").html("");
        data.forEach(dentista =>{
            var html="<tr>" +
            "<td>" + dentista.id + "</td>" +
            "<td>" + dentista.nome + "</td>" +
            "<td>" + dentista.cro + "</td>" +
            "<td>" + dentista.telefone +"</td>"+
            "<td>"+
            "<button type ='button' class='btn btn-primary btn-sm alterar' id='alterar"+dentista.id+
            "'>Alterar</button>"+
            "<button type ='button' class = 'btn btn-danger excluir btn-sm' id='"+dentista.id+
            "'>Excluir</button></td>"
            "</tr>";
            $("tbody").append(html);
        })
    })
}

$(document).on("click",".alterar", function(event){
    event.preventDefault();
    var id = this.id.replace("alterar","");
    $.getJSON("http://localhost/consultorio/backend/dentista/listarPorId.php?id="+id, function(dentista){
        console.log(dentista.nome);
        console.log(dentista)
        $("#nome").val(dentista.nome);
        $("#id").val(dentista.id);
        $("#cro").val(dentista.cro);
        $("#telefone").val(dentista.telefone);
        $("#salvar").hide();
        $("#alterar").show();
    });
})

$(document).on("click", ".excluir", function(event){
    event.preventDefault();
    var id = this.id
    var excluir = confirm("DESEJA EXCLUIR?");
    if(excluir){
        $.get("http://localhost/consultorio/backend/dentista/excluir.php?id="+id, function(data){
            read();
        })
    }
})
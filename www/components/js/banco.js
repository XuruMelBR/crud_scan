$(document).on("click","#cadastrar",function(){
  var dados = {
    'cod':$("#cod").val(),
    'modelo':$("#modelo").val(),
    'processador':$("#processador").val(),
    'valor':$("#valor").val(),
    'sistema':$("#sistema").val(),
    'tela':$("#tela").val(),
    'wifi':$("#wifi").val(),
    'qntd':$("#qntd").val(),
    'resolucao':$("#resolucao").val(),
    'flash':$("#flash").val(),
    'descricao':$("#descricao").val()
  };

  $.ajax({
  type:'post',
  url:'https://crudapp2-pedrospiet.c9users.io/cadastro.php', //referencia
  data:dados,

  success:function(data){
      navigator.notification.alert(data);
    $("#cod").val(""),
    $("#modelo").val(""),
    $("#processador").val(""),
    $("#valor").val(""),
   $("#sistema").val(""),
    $("#tela").val(""),
    $("#wifi").val(""),
    $("#qntd").val(""),
    $("#resolucao").val(""),
   $("#flash").val(""),
   $("#descricao").val("")
  },
  error:function(data){
    navigator.notification.alert(data);
  }
  })
});


function listarCelulares(){

  var itemLista = "";

  $.ajax({
    type:'post', //como enviar
    url:'https://crudapp2-pedrospiet.c9users.io/listar.php', //link do servidor
    dataType:'json', //tipo de arquivo
    // se der certo
    success: function(data){

    },
    // se der errado
    error: function(data){
      navigator.notification.alert(data);
    }
  });

}

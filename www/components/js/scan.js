// This is a JavaScript file
//comitando denovo sicarai
function scanBarCode() 
{
    window.plugins.barcodeScanner.scan(function(result) 
    {
        document.getElementById("titulo-codigo").textContent=result.text;
    },function(error) 
      {
          alert("Erro ao escanear: " + error);
      });
}

function scanUpdate()
{
  var resultado;
  resultado = document.getElementById("codigo").textContent;


}
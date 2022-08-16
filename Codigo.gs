function doGet() {
  var html = HtmlService.createTemplateFromFile('Index.html').evaluate()
  .setTitle("Control de Gestiones Telefonistas")
  .setFaviconUrl("https://freepngimg.com/download/telephone/13-2-telephone-free-download-png.png");
  return html

}


function Escribir(id,direccion,horario,telefonista,obs,dispatcher,hora){
  const libro = SpreadsheetApp.openById("1vy1Hs13iLtDaWRyvheHWl9yEyogfcXUOkgchgQtKFrM");
  const Hoja = libro.getSheetByName("Accesos de edificios");  
  var UltimaFila = Hoja.getLastRow();

    Hoja.getRange(UltimaFila+1,2).setValue(id);
    Hoja.getRange(UltimaFila+1,3).setValue(direccion);
    Hoja.getRange(UltimaFila+1,4).setValue(horario);
    Hoja.getRange(UltimaFila+1,5).setValue(telefonista);
    Hoja.getRange(UltimaFila+1,6).setValue(obs);
    Hoja.getRange(UltimaFila+1,7).setValue(dispatcher);
    Hoja.getRange(UltimaFila+1,8).setValue(hora);
    return
}


function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent()

}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//Variables

var IDPARAMONTAR;


//Eventos

document.getElementById("BUSCARID").addEventListener('click', () => {

  if (document.getElementById("ID").value == "") {
    window.alert("Debes ingresar un numero de ID");
    return
  }
  let ID = document.getElementById("ID").value;
  google.script.run.withSuccessHandler(function (output) {
    document.getElementById("DIRECCION").value = output[1];
    document.getElementById("NODO").value = output[0];
    if ((document.getElementById("DIRECCION").value == "") && (document.getElementById("NODO").value == "")) {
      window.alert(`El ID: ${ID} no fue ubicado dentro de la Planilla de Produccion`);
      return
    }
  }).buscarID(ID);
})

document.getElementById("TIPOINFO").addEventListener("click", () => {

})



document.getElementById("GENERAR").addEventListener("click", () => {

  let Titulo;
  let Permisoenviar;
  let Competenciaenviar;


  CampoID = document.getElementById("ID").value;
  CampoNodo = document.getElementById("NODO").value;
  CampoDireccion = document.getElementById("DIRECCION").value;
  CampoZona = document.getElementById("ZONA").value;
  CampoPisos = document.getElementById("PISOS").value;
  CampoDptos = document.getElementById("DPTOS").value;

  switch (document.getElementById("TIPOINFO").value) {
    case "1": Titulo = "SOLICITUD DE PERMISO"; break;
    case "2": Titulo = "INCUMPLIMIENTO"; break;
    case "3": Titulo = "FACTIBILIDAD DE ARMADO"; break;
    default: break;
  }

  switch (document.getElementById("PERMISO").value) {
    case "1": Permisoenviar = "Permite armado por exterior y tiene cañería destinada para CATV (montante)."; break;
    case "2": Permisoenviar = "No permite armado por exterior, tiene cañería destinada para CATV(montante)."; break;
    case "3": Permisoenviar = "Permite armado por exterior, no tiene cañería destinada para CATV(montante)."; break;
    case "4": Permisoenviar = "No tiene permiso, ingreso como una VT de instalación."; break;
    default: break;
  }

  switch (document.getElementById("COMPETENCIA").value) {
    case "1": Competenciaenviar = "Las competencias se encuentran armada por Exterior y ofrecen servicios de internet y cable."; break;
    case "2": Competenciaenviar = "Las competencias se encuentran armada por Montante y ofrecen servicios de internet y cable."; break;
    case "3": Competenciaenviar = "Las competencias se encuentran armada por Exterior y Montante y ofrecen servicios de internet y cable."; break;
    case "4": Competenciaenviar = "El Edificio no posee otras empresas instaladas."; break;
    default: break;
  }




  /*
  let Campoimagen1 = document.getElementById("imaUpload").files[0];

  const objectURL = window.URL.createObjectURL(Campoimagen1);

  const imgs = document.querySelectorAll(".obj")

  console.log(Campoimagen1);
  console.log(objectURL);
  console.log(imgs[0]);*/






  google.script.run.Escribir(CampoID, CampoNodo, CampoDireccion, CampoZona, CampoPisos, CampoDptos, IDPARAMONTAR, Titulo, Permisoenviar, Competenciaenviar);

})



//Funciones

function abrirNuevoTab(url) {
  // Abrir nuevo tab
  var win = window.open(url, '_blank');
  // Cambiar el foco al nuevo tab (punto opcional)
  win.focus();
}



//----------------- vista previa de las imagenes --------------------------------

document.getElementById("imaUpload").addEventListener("change", handleFiles, false);

function handleFiles(f) {

  let previewDiv = document.getElementById("preview").innerHTML = "";
  const files = document.getElementById("imaUpload").files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')) { continue }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.classList.add("img-fluid");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }

  uploadFile();

}

function uploadFile() {

  const selectedFile = document.getElementById("imaUpload").files[0];

  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);

  }

}

function FileUpload(img, file) {
  var reader = new FileReader();
  reader.onload = function (event) {
    //console.log(event.target.result);
    const obj = {
      filename: file.name,
      mimeType: file.type,
      bytes: [... new Int8Array(event.target.result)]
    }

    google.script.run.withSuccessHandler((e) => {

      let imagenID = e;
      IDPARAMONTAR = imagenID;


    }).uploadFiles(obj);

  };
  reader.readAsArrayBuffer(file);
}



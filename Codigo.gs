<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reformas de Red</title>
</head>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

<body>


    <div class="container-xxl text-center">

        <div class="row p-2" style="background-color: #335EFF;">
            <!-- HEADER-->
            <div class="col-12 rounded bg-white">
                <div class="row align-items-start">
                    <div class="col-4 align-self-center">

                        <img src="https://drive.google.com/uc?export=view&id=1TpG3gDh-LVex2UIsET0jqkPLKXF70kyL" class="img-fluid " style="max-height: 100px">

                    </div>

                    <div class="col-6 align-self-center">
                        <h3 style="color:black">Control de Gestiones Telefonistas</h3>
                    </div>

                    <div class="col-2 align-self-center d-none d-md-block">
                        <h5 style="color:black">Al servicio de</h5>
                        <img src="https://drive.google.com/uc?export=view&id=1ZvmHyBtE7AXhgYmYryDFiTzyJmm9EbHq" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- --------------------------------------BODY------------------------------------------------------------>
            <div class="col-md-7 pt-3 pb-5" style="background-color: #C2CAE5;">

                <form id="FORMULARIO" class="row g-2 needs-validation" onsubmit="return false" action="PRUEBA()" novalidate>

                    <div class="col-12 position-relative">
                        <div class="row">
                            <label for="DESPACHO" class="col-sm-3 col-form-label text-start">Despacho:</label>
                            <div class="col-sm-5">
                                <select class="form-select" id="DESPACHO" required>
                                          <option selected disabled value="">Seleccione</option>
                                          <option value="ALEJANDRO">ALEJANDRO</option>
                                          <option value="RENATO">RENATO</option>
                                          <option value="RAFAEL">RAFAEL</option>
                                          <option value="LUCIANO">LUCIANO</option>
                                          <option value="KEVIN">KEVIN</option>
                                          <option value="EDUARDO">EDUARDO</option>
                                          <option value="ALEJANDRA">ALEJANDRA</option>
                                          <option value="GONZALO">GONZALO</option>
                                          <option value="NESTOR">NESTOR</option>
                                          <option value="LUCAS">LUCAS</option>          
                                          <option value="OMAR">OMAR</option>
                                      </select>
                                <div class="invalid-tooltip">
                                    ¡Debes ingresar el Despacho!
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 position-relative">
                        <div class="row">
                            <label for="ID" class="col-sm-3 col-form-label text-start">ID:</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="ID" placeholder="Ingrese el ID"
                                    required>
                                <div class="invalid-tooltip">
                                    ¡Debes ingresar el ID!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 position-relative">
                        <div class="row">
                            <label for="DIRECCION" class="col-sm-3 col-form-label text-start">Dirección:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="DIRECCION" placeholder="Ingrese la Dirección"
                                    required>
                                <div class="invalid-tooltip">
                                    ¡Debes ingresar la Dirección!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 position-relative">
                      <div class="row">
                              <div class="input-group">
                                  <div class="col-3 text-start">
                                    <label for="TELEF" class="col-form-label text-start">Código de Telefonista</label>
                                  </div>
                                  <div class="col-3">
                                      <select class="form-select" id="TELEF" required>
                                          <option selected disabled value="">Seleccione</option>
                                          <option value="1010">1010</option>
                                          <option value="1020">1020</option>
                                          <option value="1030">1030</option>
                                          <option value="1040">1040</option>
                                          <option value="1050">1050</option>
                                          <option value="1060">1060</option>
                                          <option value="1070">1070</option>
                                      </select>
                                      <div class="invalid-tooltip">
                                          ¡Debes Seleccionar el codigo del Telefonistas!
                                      </div>
                                  </div>
                                  <div class="col-6">
                                      <input type="text" class="form-control" id="TELEFONISTA" placeholder="Telefonista" disabled>
                                  </div>
                              </div>
                      </div>
                    </div> 

                    <div class="col-12 position-relative">
                      <div class="row">
                              <div class="input-group">
                                  <div class="col-4 text-start">
                                    <label for="HORARIO" class="col-form-label text-start">Franja Horaria de Agendamiento</label>
                                  </div>
                                  <div class="col-2">
                                      <input id="HORA1" type="text" class="form-control" required>
                                      <div class="invalid-tooltip">
                                          ¡Debes Seleccionar la franja horaria!
                                      </div>
                                  </div>
                                  <div class="col-1 text-center">
                                    <label for="a" class="col-form-label text-start"> a </label>
                                  </div>
                                  <div class="col-2">
                                      <input id="HORA2" type="text" class="form-control" required>
                                      <div class="invalid-tooltip">
                                          ¡Debes Seleccionar la franja horaria!
                                      </div>
                                  </div>
                                  <div class="col-3">
                                      <input id="FECHA" type="date" class="form-control" required>
                                      <div class="invalid-tooltip">
                                          ¡Debes Seleccionar la Fecha!
                                      </div>
                                  </div>
                              </div>
                      </div>
                    </div> 

                    <div class="col-12 position-relative">
                        <div class="row">
                            <label for="OBS" class="col-sm-3 col-form-label text-start">Observaciones:</label>
                            <div class="col-sm-12">
                                <textarea id="OBS" class="form-control" id="exampleFormControlTextarea1" rows="2" required></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 pt-2">
                        <div class="row">
                            <div class="col-6 d-grid gap-2">
                                <button id="GENERAR" type="submit" class="btn btn-success">GENERAR</button>

                            </div>
                            <div class="col-6 d-grid gap-2">
                                <button id="BORRAR" type="reset" class="btn btn-danger">BORRAR</button>

                            </div>
                        </div>
                    </div>

                </form>


            </div>


            <div class="col-md-5 pt-3 pb-5" style="background-color: #979EB8;">

                <div class="row">
                    <div class="col-12 position-relative">
                        <div class="row">
                            <label for="PARRAFO" class="col-sm-12 col-form-label fw-bold text-start">Cuerpo del
                                Ticket:</label>
                            <div class="col-sm-10 offset-sm-1">
                                <textarea class="form-control" id="PARRAFO" rows="10"></textarea>
                            </div>
                            <div class="col-sm-10 pt-2 offset-sm-1 d-grid gap-2">
                                <button id="COPIAR" type="button" class="btn btn-success">COPIAR</button>
                            </div>
                            <div class="col-sm-10 pt-2 offset-sm-1 d-grid gap-2">
                                <button id="ENVIAR" type="button" class="btn btn-success">ENVIAR</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="row" style="background-color: #335EFF;">
            <!------------------------------------------ FOOTER ------------------------------>
            <div class="col align-self-center">
                <div class="row mt-3">
                    <div class="col-sm-12 ">
                        <h6 style="color:white">Desarrollado por Gestion de Procesos y Servicios S.A. al servicio de
                            TELECENTRO</h6>
                    </div>
                    <div class="row mt-">
                        <div class="col-sm-6 offset-sm-3">
                            <h6 style="color:white">By Ing. Ignacio Velazquez</h6>
                        </div>
                        <div class="col-sm-1 offset-sm-2">
                            <h5 style="color:white">V1.0</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <script></script>
        <?!= include('JavaScript'); ?>

</body>

</html>
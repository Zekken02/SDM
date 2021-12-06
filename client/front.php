<!DOCTYPE html>
<html lang="es">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
    <script src="https://kit.fontawesome.com/aa00e73738.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
  </head>
  <body>
    <?php $target_radio = 2 ?>
    <?php include 'navbar.php' ?>
    <div class="m-auto row">
      <div id="filtros" class="filtros col-3 mt-4 ml-4">
        <h2 class="mb-2">Buscar</h2>
        <!--========== INPUT BARRA DE BUSQUEDA ============-->
        <input type="search" name="search_bar" class="search_bar mt-2 form-control" placeholder="buscar...">
        <!--========== INPUTS PARA AREA DE PRODUCTO ============-->
        <h2 class="mb-2 mt-2">Area</h2>
        <div id="filter_area" class="filter_area">
          <input type="radio" value="" name="area" class="select_area" id="area0" checked="checked">
          <label for="area0">Todas</label>
        </div>

        <!--========== INPUTS PARA CATEGORIA DE PRODUCTO ============-->
        <h2 class="mb-2 mt-2">Categoria</h2>
        <div id="filter_categoria" class="filter_categoria">
          <input type="radio" value="" name="categoria" class="select_categoria" id="categoria0" checked="checked">
          <label for="categoria0">Todas</label>
        </div>

        <!--========== INPUTS PARA MARCA DE PRODUCTO ============-->
        <h2 class="mb-2 mt-2">Marca</h2>
        <div id="filter_marca" class="filter_marca">
          <input type="radio" value="" name="marca" class="select_marca" id="marca0" checked="checked">
          <label for="marca0">Todas</label>
        </div>

      </div>
      <!--========== DIV QUE CONTIENE LAS TARJETAS ============-->
      <div class="container col-8 mt-4">
        <div id="datos" class="datos row"></div>
      </div>
    </div>
  <script type="text/javascript" src="js/productos.js"></script>
  </body>
</html>

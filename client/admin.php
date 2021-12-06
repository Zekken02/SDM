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
    <?php $target_radio = 4 ?>
    <?php include 'navbar.php' ?>
    <div class="row m-auto">
      <div class="container card indice_content mt-4 col-12 col-lg-3">
        <h2>Indice</h2>
        <button class="btn btn_indiceCategoria" id="show_prodCategoria"><i id="arrow_prodCategoria" class="fa-solid fa-caret-right"></i><label class="ml-2">Productos</label></button>
            <button class="btn btn_indiceSubCategoria" id="add_prodPos">Añadir productos</button>
            <button class="btn btn_indiceSubCategoria" id="list_prodPos">Lista de productos</button>

        <button class="btn btn_indiceCategoria" id="show_areaCategoria"><i id="arrow_areaCategoria" class="fa-solid fa-caret-right"></i><label class="ml-2">Area</label></button>
            <button class="btn btn_indiceSubCategoria" id="add_areaPos">Añadir area</button>
            <button class="btn btn_indiceSubCategoria" id="list_areaPos">Lista de areas</button>
        <button class="btn btn_indiceCategoria" id="show_catCategoria"><i id="arrow_catCategoria" class="fa-solid fa-caret-right"></i><label class="ml-2">Categoria</label></button>
            <button class="btn btn_indiceSubCategoria" id="add_catPos">Añadir categoria</button>
            <button class="btn btn_indiceSubCategoria" id="list_catPos">Lista de categorias</button>

        <button class="btn btn_indiceCategoria" id="pageUp_admin" onclick="topFunction()"><label class="ml-2">Volver arriba</label></button>
      </div>
      <div class="container card admin_content mt-4 col-12 col-lg-8">
        <h2 id="prod_upl_edit">Añadir producto</h2>
        <div class="add_prod mt-4 mb-4">
          <form>
            <div class="row">
                <div class="col-12">
                  <input type="text" class="form-control" id="id_prod" name="id_prod" readonly="readonly" placeholder="id..." hidden="true">
                </div>
                <div class="col-6">
                  <label for="nombre_prod">Ingresar un nombre para el producto*</label>
                  <input type="text" class="form-control nombre_prod" name="nombre_prod" placeholder="nombre...">
                </div>
                <div class="col-6">
                  <label for="descripcion_prod">Ingresar una descripcion para el producto*</label>
                  <input type="text" class="form-control descripcion_prod" name="descripcion_prod" placeholder="descripcion...">
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="col-6">
                  <label for="precio_prod">Ingresar un precio para el producto*</label>
                  <input type="text" class="form-control precio_prod" name="precio_prod" placeholder="precio...">
                </div>
                <div class="col-6">
                  <label for="foto_prod">Cargar una foto para el producto*</label>
                  <input type="file" class="form-control foto_prod" name="foto_prod">
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="col-6">
                  <label for="area_prod">Seleccionar un area para el producto*</label>
                  <select id="add_area" name="area_prod" class="form-control add_area">
                    
                  </select>
                </div>
                <div class="col-6">
                  <label for="categoria_prod">Seleccionar una categoria para el producto*</label>
                  <select id="add_categoria" name="categoria_prod" class="form-control add_categoria">
                    
                  </select>
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="col-6">
                  <label for="marca_prod">Seleccionar una marca para el producto*</label>
                  <select id="add_marca" name="marca_prod" class="form-control add_marca">
                    
                  </select>
                </div>
                <div class="col-6">
                </div>  
                <div class="col-12">
                  <br>
                </div>
                <div class="upload_buttons_prod button-row justify-content-end d-flex">
                  <div class="col-6">
                    <button type="submit" formaction="prod_upload.php" class="btn btn_blue">Añadir</button>
                  </div>
                </div>                
            </div>
          </form>
        </div>
        <h2 id="prod_edit_del">Modificar producto</h2>  
          <div class="row mb-2">
            <div class="col-3">Area:</div>
            <div class="col-3">Categoria:</div>
            <div class="col-3">Marca:</div>
            <div class="col-3">Buscar:</div>
            <div class="col-3">
              <select id="filter_area" class="form-control filter_area">
                <option value="">todas</option>
              </select>
            </div>
            <div class="col-3">
              <select id="filter_categoria" class="form-control filter_categoria">
                <option value="">todos</option>
              </select>
            </div>
            <div class="col-3">
              <select id="filter_marca" class="form-control filter_marca">
                <option value="">todas</option>
              </select>
            </div>
            <div class="col-3">
              <input type="text" class="form-control prod_search_bar" name="prod_search_bar">
            </div>
          </div>
          <div class="prod_list">
            <table id="prod_list" class="table table-striped table-hover prod_table">
            </table>
            <div class="button-row justify-content-end d-flex mb-4" id="btn_back_next_prod">
              
            </div>
          </div>
        <h2 id="area_upl_edit">Añadir area</h2>
        <div class="add_area mt-4 mb-4">
          <form>
            <div class="row">
                <div class="col-12">
                  <input type="text" class="form-control" id="id_area" name="id_area" readonly="readonly" placeholder="id..." hidden="true">
                </div>
                <div class="col-6">
                  <label for="nombre_area">Ingresar un nombre para el area*</label>
                  <input type="text" class="form-control nombre_area" name="nombre_area" placeholder="nombre...">
                </div>
                <div class="col-6">
                  <label for="descripcion_area">Ingresar una descripcion para el area*</label>
                  <input type="text" class="form-control descripcion_area" name="descripcion_area" placeholder="descripcion...">
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="upload_buttons_area button-row justify-content-end d-flex">
                  <div class="col-6">
                    <button type="submit" formaction="area_upload.php" class="btn btn_blue">Añadir</button>
                  </div>
                </div>                
            </div>
          </form>
        </div>
        <h2 id="area_edit_del">Modificar area</h2>  
          <div class="row mb-2">
            <div class="col-9"></div>
            <div class="col-3">Buscar:</div>
            <div class="col-9"></div>
            <div class="col-3">
              <input type="text" class="form-control area_search_bar" name="area_search_bar">
            </div>
          </div>
          <div class="area_list">
            <table id="area_list" class="table table-striped table-hover area_table">
            </table>
            <div class="button-row justify-content-end d-flex mb-4" id="btn_back_next_area">
             
            </div>
          </div>
          <h2 id="cat_upl_edit">Añadir categoria</h2>
        <div class="add_cat mt-4 mb-4">
          <form>
            <div class="row">
                <div class="col-12">
                  <input type="text" class="form-control" id="id_cat" name="id_cat" readonly="readonly" placeholder="id..." hidden="true">
                </div>
                <div class="col-6">
                  <label for="nombre_cat">Ingresar un nombre para la categoria*</label>
                  <input type="text" class="form-control nombre_cat" name="nombre_cat" placeholder="nombre...">
                </div>
                <div class="col-6">
                  <label for="descripcion_cat">Ingresar una descripcion para la categoria*</label>
                  <input type="text" class="form-control descripcion_cat" name="descripcion_cat" placeholder="descripcion...">
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="upload_buttons_cat button-row justify-content-end d-flex">
                  <div class="col-6">
                    <button type="submit" formaction="cat_upload.php" class="btn btn_blue">Añadir</button>
                  </div>
                </div>                
            </div>
          </form>
        </div>
        <h2 id="cat_edit_del">Modificar categoria</h2>  
          <div class="row mb-2">
            <div class="col-9"></div>
            <div class="col-3">Buscar:</div>
            <div class="col-9"></div>
            <div class="col-3">
              <input type="text" class="form-control cat_search_bar" name="cat_search_bar">
            </div>
          </div>
          <div class="cat_list">
            <table id="cat_list" class="table table-striped table-hover cat_table">
            </table>
            <div class="button-row justify-content-end d-flex mb-4" id="btn_back_next_cat">
             
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript">
    //########### PRODUCTOS ##############
    var show_prodCategoria = document.getElementById("show_prodCategoria");
    var arrow_prodCateegoria = document.getElementById("arrow_prodCategoria");
    var add_prodPos = document.getElementById("add_prodPos");
    var list_prodPos = document.getElementById("list_prodPos");
    //########### AREA ##############
    var show_areaCategoria = document.getElementById("show_areaCategoria");
    var arrow_areaCateegoria = document.getElementById("arrow_areaCategoria");
    var add_areaPos = document.getElementById("add_areaPos");
    var list_areaPos = document.getElementById("list_areaPos");
    //########### CATEGORIA ##############
    var show_catCategoria = document.getElementById("show_catCategoria");
    var arrow_catCateegoria = document.getElementById("arrow_catCategoria");
    var add_catPos = document.getElementById("add_catPos");
    var list_catPos = document.getElementById("list_catPos");

    show_prodCategoria.addEventListener('click', function(){
      arrow_prodCateegoria.classList.toggle("fa-caret-right");
      arrow_prodCateegoria.classList.toggle("fa-caret-down");
      add_prodPos.classList.toggle("show")
      list_prodPos.classList.toggle("show")
    });

    show_areaCategoria.addEventListener('click', function(){
      arrow_areaCateegoria.classList.toggle("fa-caret-right");
      arrow_areaCateegoria.classList.toggle("fa-caret-down");
      add_areaPos.classList.toggle("show")
      list_areaPos.classList.toggle("show")
    });

    show_catCategoria.addEventListener('click', function(){
      arrow_catCateegoria.classList.toggle("fa-caret-right");
      arrow_catCateegoria.classList.toggle("fa-caret-down");
      add_catPos.classList.toggle("show")
      list_catPos.classList.toggle("show")
    });

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    add_prodPos.addEventListener('click', function(){
      function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("prod_upl_edit")));
    });
    list_prodPos.addEventListener('click', function(){
      function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("prod_edit_del")));
    });

    add_areaPos.addEventListener('click', function(){
      function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("area_upl_edit")));
    });
    list_areaPos.addEventListener('click', function(){
      function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("area_edit_del")));
    });

    add_catPos.addEventListener('click', function(){
      function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("cat_upl_edit")));
    });
    list_catPos.addEventListener('click', function(){
      function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("cat_edit_del")));
    });
  </script>
  <script type="text/javascript" src="js/admin.js"></script>
</html>

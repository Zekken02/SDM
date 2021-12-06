// declaracion de variables:
//paginador
var desde_prod = 0;
var hasta_prod = 20;

var desde_area = 0;
var hasta_area = 20;

var desde_cat = 0;
var hasta_cat = 20;

var desde_marca = 0;
var hasta_marca = 20;

// llamamos al select con la clase "filter_area" y tomamos su valor
filter_area = document.querySelector(".filter_area");
area = document.querySelector(".filter_area").value;

// actualizar funcion cuando cambia el contenido de "filter_area"
filter_area.addEventListener('change', function(){
  area = document.querySelector(".filter_area").value;
  lista_productos()
})

// llamamos al select con la clase "filter_categoria" y tomamos su valor
filter_categoria = document.querySelector(".filter_categoria");
categoria = document.querySelector(".filter_categoria").value;

// actualizar funcion cuando cambia el contenido de "filter_marca"
filter_categoria.addEventListener('change', function(){
  categoria = document.querySelector(".filter_categoria").value;
  lista_productos()
})

// llamamos al select con la clase "filter_marca" y tomamos su valor
filter_marca = document.querySelector(".filter_marca");
marca = document.querySelector(".filter_marca").value;

// actualizar funcion cuando cambia el contenido de "filter_marca"
filter_marca.addEventListener('change', function(){
  marca = document.querySelector(".filter_marca").value;
  lista_productos()
})
// llamamos al input con la clase "search_bar" y tomamos su valor
prod_search_bar = document.querySelector(".prod_search_bar");
search = document.querySelector(".prod_search_bar").value;

// actualizar funcion cuando cambia el contenido de "search_bar"
prod_search_bar.addEventListener('input', function(){
  search = document.querySelector(".prod_search_bar").value;
  lista_productos()
})

// llamamos al input con la clase "search_bar" y tomamos su valor
area_search_bar = document.querySelector(".area_search_bar");
search_area = document.querySelector(".area_search_bar").value;

// actualizar funcion cuando cambia el contenido de "search_bar"
area_search_bar.addEventListener('input', function(){
  search_area = document.querySelector(".area_search_bar").value;
  lista_areas()
})

// llamamos al input con la clase "search_bar" y tomamos su valor
cat_search_bar = document.querySelector(".cat_search_bar");
search_cat = document.querySelector(".cat_search_bar").value;

// actualizar funcion cuando cambia el contenido de "search_bar"
cat_search_bar.addEventListener('input', function(){
  search_cat = document.querySelector(".cat_search_bar").value;
  lista_categorias()
})

// llamamos al input con la clase "search_bar" y tomamos su valor
marca_search_bar = document.querySelector(".marca_search_bar");
search_marca = document.querySelector(".marca_search_bar").value;

// actualizar funcion cuando cambia el contenido de "search_bar"
marca_search_bar.addEventListener('input', function(){
  search_marca = document.querySelector(".marca_search_bar").value;
  lista_marcas()
})

//  llamamos al input con el id "id_prod"
id_prod_bar = document.getElementById("id_prod")

//  llamamos al input con el id "id_prod"
id_area_bar = document.getElementById("id_area")

//  llamamos al input con el id "id_prod"
id_cat_bar = document.getElementById("id_cat")

//  llamamos al input con el id "id_prod"
id_marca_bar = document.getElementById("id_marca")

// creamos una funcion para cuando el valor de id_prod cambie
function id_prod_change(){
  fetch("http://localhost/github/SDM/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const inputNombre = document.querySelector(".nombre_prod");
              const inputDescripcion = document.querySelector(".descripcion_prod");
              const inputPrecio = document.querySelector(".precio_prod");
              const inputFoto = document.querySelector(".foto_prod");
              const inputArea = document.querySelector(".add_area");
              const inputCategoria = document.querySelector(".add_categoria");
              const inputMarca = document.querySelector(".add_marca");
              
               // filtra el producto por id
                 data = data.filter(function(items){
                 return (items.id == id_prod_bar.value);
                 });
                 console.log(data);

              data.map((producto => {
                inputNombre.value = producto.nombre;
                inputDescripcion.value = producto.descripcion;
                inputPrecio.value = producto.precio;
                inputFoto.value = producto.foto;
                inputArea.value = producto.id_area;
                inputCategoria.value = producto.id_categoria;
                inputMarca.value = producto.id_marca;
              }))
            });
          upload_buttons = document.querySelector(".upload_buttons_prod");
          upload_buttons.innerHTML="";

          const div_del_upload = document.createElement("div");
          div_del_upload.className = "col-6";
          const btn_del_upload = document.createElement("button");
          btn_del_upload.type = "submit";
          btn_del_upload.className = "btn btn_red";
          btn_del_upload.innerText = "Cancelar"

          const div_edit_upload = document.createElement("div");
          div_edit_upload.className = "col-6";
          const btn_edit_upload = document.createElement("button");
          btn_edit_upload.type = "submit";
          btn_edit_upload.formAction = "prod_edit.php";
          btn_edit_upload.className = "btn btn_blue";
          btn_edit_upload.innerText = "Editar"

          div_del_upload.appendChild(btn_del_upload);
          upload_buttons.appendChild(div_del_upload);
          div_edit_upload.appendChild(btn_edit_upload);
          upload_buttons.appendChild(div_edit_upload);
}

function id_area_change(){
  fetch("http://localhost/github/SDM/server/areas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const inputNombre = document.querySelector(".nombre_area");
              const inputDescripcion = document.querySelector(".descripcion_area");
              
               // filtra el producto por id
                 data = data.filter(function(items){
                 return (items.id == id_area_bar.value);
                 });
                 console.log(data);

              data.map((area => {
                inputNombre.value = area.n_area;
                inputDescripcion.value = area.desc_area;
              }))
            });
          upload_buttons = document.querySelector(".upload_buttons_area");
          upload_buttons.innerHTML="";

          const div_del_upload = document.createElement("div");
          div_del_upload.className = "col-6";
          const btn_del_upload = document.createElement("button");
          btn_del_upload.type = "submit";
          btn_del_upload.className = "btn btn_red";
          btn_del_upload.innerText = "Cancelar"

          const div_edit_upload = document.createElement("div");
          div_edit_upload.className = "col-6";
          const btn_edit_upload = document.createElement("button");
          btn_edit_upload.type = "submit";
          btn_edit_upload.formAction = "area_edit.php";
          btn_edit_upload.className = "btn btn_blue";
          btn_edit_upload.innerText = "Editar"

          div_del_upload.appendChild(btn_del_upload);
          upload_buttons.appendChild(div_del_upload);
          div_edit_upload.appendChild(btn_edit_upload);
          upload_buttons.appendChild(div_edit_upload);
}

function id_cat_change(){
  fetch("http://localhost/github/SDM/server/categorias")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const inputNombre = document.querySelector(".nombre_cat");
              const inputDescripcion = document.querySelector(".descripcion_cat");
              
               // filtra el producto por id
                 data = data.filter(function(items){
                 return (items.id == id_cat_bar.value);
                 });
                 console.log(data);

              data.map((categoria => {
                inputNombre.value = categoria.tipo;
                inputDescripcion.value = categoria.descripcion;
              }))
            });
          upload_buttons = document.querySelector(".upload_buttons_cat");
          upload_buttons.innerHTML="";

          const div_del_upload = document.createElement("div");
          div_del_upload.className = "col-6";
          const btn_del_upload = document.createElement("button");
          btn_del_upload.type = "submit";
          btn_del_upload.className = "btn btn_red";
          btn_del_upload.innerText = "Cancelar"

          const div_edit_upload = document.createElement("div");
          div_edit_upload.className = "col-6";
          const btn_edit_upload = document.createElement("button");
          btn_edit_upload.type = "submit";
          btn_edit_upload.formAction = "cat_edit.php";
          btn_edit_upload.className = "btn btn_blue";
          btn_edit_upload.innerText = "Editar"

          div_del_upload.appendChild(btn_del_upload);
          upload_buttons.appendChild(div_del_upload);
          div_edit_upload.appendChild(btn_edit_upload);
          upload_buttons.appendChild(div_edit_upload);
}

function id_marca_change(){
  fetch("http://localhost/github/SDM/server/marcas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const inputNombre = document.querySelector(".nombre_marca");
              const inputDescripcion = document.querySelector(".descripcion_marca");
              
               // filtra el producto por id
                 data = data.filter(function(items){
                 return (items.id == id_marca_bar.value);
                 });
                 console.log(data);

              data.map((marca => {
                inputNombre.value = marca.n_marca;
                inputDescripcion.value = marca.descripcion;
              }))
            });
          upload_buttons = document.querySelector(".upload_buttons_marca");
          upload_buttons.innerHTML="";

          const div_del_upload = document.createElement("div");
          div_del_upload.className = "col-6";
          const btn_del_upload = document.createElement("button");
          btn_del_upload.type = "submit";
          btn_del_upload.className = "btn btn_red";
          btn_del_upload.innerText = "Cancelar"

          const div_edit_upload = document.createElement("div");
          div_edit_upload.className = "col-6";
          const btn_edit_upload = document.createElement("button");
          btn_edit_upload.type = "submit";
          btn_edit_upload.formAction = "marca_edit.php";
          btn_edit_upload.className = "btn btn_blue";
          btn_edit_upload.innerText = "Editar"

          div_del_upload.appendChild(btn_del_upload);
          upload_buttons.appendChild(div_del_upload);
          div_edit_upload.appendChild(btn_edit_upload);
          upload_buttons.appendChild(div_edit_upload);
}

function filtros_areas() {
          fetch("http://localhost/github/SDM/server/areas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterArea = document.getElementById("filter_area");
              const divAddArea = document.getElementById("add_area");

              data.map((area => {
              const o_area = document.createElement("option");
              o_area.value = area.id;
              o_area.innerText = area.n_area;
              const z_area = document.createElement("option");
              z_area.value = area.id;
              z_area.innerText = area.n_area;

              divFilterArea.appendChild(o_area);
              divAddArea.appendChild(z_area);
              }))
            });       
};

function filtros_categorias() {
          fetch("http://localhost/github/SDM/server/categorias")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterCategoria = document.getElementById("filter_categoria");
              const divAddCategoria = document.getElementById("add_categoria");

              data.map((categoria => {
              const o_categoria = document.createElement("option");
              o_categoria.value = categoria.id;
              o_categoria.innerText = categoria.tipo;
              const z_categoria = document.createElement("option");
              z_categoria.value = categoria.id;
              z_categoria.innerText = categoria.tipo;

              divFilterCategoria.appendChild(o_categoria);
              divAddCategoria.appendChild(z_categoria);
              }))
            });       
};

function filtros_marcas() {
          fetch("http://localhost/github/SDM/server/marcas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterMarca = document.getElementById("filter_marca");
              const divAddMarca = document.getElementById("add_marca");

              data.map((marca => {
              const o_marca = document.createElement("option");
              o_marca.value = marca.id;
              o_marca.innerText = marca.n_marca;
              const z_marca = document.createElement("option");
              z_marca.value = marca.id;
              z_marca.innerText = marca.n_marca;

              divFilterMarca.appendChild(o_marca);
              divAddMarca.appendChild(z_marca);
              }))
            });       
};

function lista_productos() {
          fetch("http://localhost/github/SDM/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("prod_list");
              divDatos.innerHTML="";
              
               // filtra el area
               if (area !== "") {
                 data = data.filter(function(items){
                 return (items.id_area == area);
                 });
                 console.log(data);
               } else{}

               // filtra la categoria
               if (categoria !== "") {
                 data = data.filter(function(items){
                 return (items.id_categoria == categoria);
                 });
                 console.log(data);
               } else{}

               // filtra la marca
               if (marca !== "") {
                 data = data.filter(function(items){
                 return (items.id_marca == marca);
                 });
                 console.log(data);
               } else{}

               // filtra la barra d busqueda
               if (search !== "") {
                 data = data.filter(function(items){
                 return items.nombre.toLowerCase().indexOf(search.toLowerCase()) > -1;
                 });
                 console.log(data);
               } else{}

               // si no puede traer ningun producto de la base de datos muestra un mensaje
               if (data.length == 0) {
                 const fila_nr = document.createElement("tr");
                 const non_result = document.createElement("td");
                 non_result.innerText = "Lo sentimos, no encontramos resultados para su busqueda...";
                 fila_nr.appendChild(non_result);
                 divDatos.appendChild(fila_nr);
                 console.log(non_result);
               }else{

              const thead = document.createElement("thead");
              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = "ID";
              id.scope = "col";
              const nombre = document.createElement("th");
              nombre.innerText = "Nombre";
              nombre.scope = "col";
              const descripcion = document.createElement("th");
              descripcion.innerText = "Descripcion";
              descripcion.scope = "col";
              const foto = document.createElement("th");
              foto.innerText = "Foto";
              foto.scope = "col";
              const precio = document.createElement("th");
              precio.innerText = "Precio";
              precio.scope = "col"
              const stock = document.createElement("th");
              stock.innerText = "Stock";
              stock.scope = "col";
              const n_area = document.createElement("th");
              n_area.innerText = "Area";
              n_area.scope = "col";
              const tipo = document.createElement("th");
              tipo.innerText = "categoria";
              tipo.scope = "col";
              const n_marca = document.createElement("th");
              n_marca.innerText = "Marca";
              n_marca.scope = "col";
              const editar = document.createElement("th");
              editar.innerText = "Modificar";
              editar.scope = "col";
              const eliminar = document.createElement("th");
              eliminar.innerText = "Eliminar";
              eliminar.scope = "col";

              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(foto);
              fila.appendChild(precio);
              fila.appendChild(stock);
              fila.appendChild(n_area);
              fila.appendChild(tipo);
              fila.appendChild(n_marca);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              thead.appendChild(fila);
              divDatos.appendChild(thead);
              }

              console.log(desde_prod);

                if (desde_prod != 0) {
                btn_back_next = document.getElementById("btn_back_next_prod");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                divBack = document.createElement("div");
                divBack.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.className = "btn btn_blue";
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnBack = document.createElement("button");
                btnBack.className = "btn btn_blue";
                btnBack.innerHTML = '<i class="fa-solid fa-angles-left"></i>';

                divBack.appendChild(btnBack);
                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divBack)
                btn_back_next.appendChild(divNext)
              }else{
                btn_back_next = document.getElementById("btn_back_next_prod");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnNext.className = "btn btn_blue";

                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divNext)
              }

              btnNext.addEventListener('click', function(){
                  desde_prod += 20;
                  hasta_prod += 20;
                  lista_productos()
              })

              if (desde_prod!=0) {
                btnBack.addEventListener('click', function(){
                  desde_prod -= 20;
                  hasta_prod -= 20;
                  lista_productos()
                })
              }

              const tbody = document.createElement("tbody");

              data.map(((producto, index) => {

              if (index>=desde_prod & index<hasta_prod) {

              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = producto.id;
              id.scope = "row";
              const nombre = document.createElement("td");
              nombre.innerText = producto.nombre;
              const descripcion = document.createElement("td");
              descripcion.innerText = producto.descripcion;
              const foto = document.createElement("td");
              const img = document.createElement("img");
              img.src = producto.imagen;
              img.className = "img-card";
              const precio = document.createElement("td");
              precio.innerText = producto.precio;
              const stock = document.createElement("td");
              stock.innerText = producto.stock;
              const n_area = document.createElement("td");
              n_area.innerText = producto.n_area;
              const tipo = document.createElement("td");
              tipo.innerText = producto.tipo;
              const n_marca = document.createElement("td");
              n_marca.innerText = producto.n_marca;
              const editar = document.createElement("td");
              editar.innerHTML = '<button class="btn btn_blue" id="edit'+ producto.id + '" name"edit"><i class="fa-solid fa-pen"></i></button>';
              const eliminar = document.createElement("td");
              eliminar.innerHTML = '<button class="btn btn_red" id="delete'+ producto.id + '" name"delete"><i class="fa-solid fa-trash-can"></i></button>';


              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(foto);
              fila.appendChild(precio);
              fila.appendChild(stock);
              fila.appendChild(n_area);
              fila.appendChild(tipo);
              fila.appendChild(n_marca);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              tbody.appendChild(fila)
              divDatos.appendChild(tbody);

              btnEdit = document.getElementById("edit" + producto.id)

              btnEdit.addEventListener('click', function(){
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
                id_prod_bar.value = producto.id;
                id_prod_change();
              })

              btnDelete = document.getElementById("delete" + producto.id)

              btnDelete.addEventListener('click', function(){
                var para = new URLSearchParams();
                para.append("id", producto.id);
                location.href = "prod_delete.php?" + para.toString();
              })
              }
              }))
            });
        };

        function lista_areas() {
          fetch("http://localhost/github/SDM/server/areas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("area_list");
              divDatos.innerHTML="";

               // filtra la barra d busqueda
               if (search_area !== "") {
                 data = data.filter(function(items){
                 return items.n_area.toLowerCase().indexOf(search_area.toLowerCase()) > -1;
                 });
                 console.log(data);
               } else{}

               // si no puede traer ningun producto de la base de datos muestra un mensaje
               if (data.length == 0) {
                 const fila_nr = document.createElement("tr");
                 const non_result = document.createElement("td");
                 non_result.innerText = "Lo sentimos, no encontramos resultados para su busqueda...";
                 fila_nr.appendChild(non_result);
                 divDatos.appendChild(fila_nr);
                 console.log(non_result);
               }else{
              const thead = document.createElement("thead");
              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = "ID";
              id.scope = "col";
              const nombre = document.createElement("th");
              nombre.innerText = "Nombre";
              nombre.scope = "col";
              const descripcion = document.createElement("th");
              descripcion.innerText = "Descripcion";
              descripcion.scope = "col";
              const editar = document.createElement("th");
              editar.innerText = "Modificar";
              editar.scope = "col";
              const eliminar = document.createElement("th");
              eliminar.innerText = "Eliminar";
              eliminar.scope = "col";

              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              thead.appendChild(fila);
              divDatos.appendChild(thead);
              }

              console.log(desde_area);

                if (desde_area != 0) {
                btn_back_next = document.getElementById("btn_back_next_area");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                divBack = document.createElement("div");
                divBack.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.className = "btn btn_blue";
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnBack = document.createElement("button");
                btnBack.className = "btn btn_blue";
                btnBack.innerHTML = '<i class="fa-solid fa-angles-left"></i>';

                divBack.appendChild(btnBack);
                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divBack)
                btn_back_next.appendChild(divNext)
              }else{
                btn_back_next = document.getElementById("btn_back_next_area");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnNext.className = "btn btn_blue";

                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divNext)
              }

              btnNext.addEventListener('click', function(){
                  desde_area += 20;
                  hasta_area += 20;
                  lista_areas()
              })

              if (desde_area!=0) {
                btnBack.addEventListener('click', function(){
                  desde_area -= 20;
                  hasta_area -= 20;
                  lista_areas()
                })
              }

                

              const tbody = document.createElement("tbody");

              data.map(((area, index) => {

              if (index>=desde_area & index<hasta_area) {

              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = area.id;
              id.scope = "row";
              const nombre = document.createElement("td");
              nombre.innerText = area.n_area;
              const descripcion = document.createElement("td");
              descripcion.innerText = area.desc_area;
              const editar = document.createElement("td");
              editar.innerHTML = '<button class="btn btn_blue" id="edit_area'+ area.id + '" name"edit"><i class="fa-solid fa-pen"></i></button>';
              const eliminar = document.createElement("td");
              eliminar.innerHTML = '<button class="btn btn_red" id="delete_area'+ area.id + '" name"delete"><i class="fa-solid fa-trash-can"></i></button>';


              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              tbody.appendChild(fila)
              divDatos.appendChild(tbody);

              btnEdit = document.getElementById("edit_area" + area.id)

              btnEdit.addEventListener('click', function(){
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
                id_area_bar.value = area.id;
                id_area_change();
              })

              btnDelete = document.getElementById("delete_area" + area.id)

              btnDelete.addEventListener('click', function(){
                var para = new URLSearchParams();
                para.append("id", area.id);
                location.href = "area_delete.php?" + para.toString();
              })
              }
              }))
            });
        };

        function lista_categorias() {
          fetch("http://localhost/github/SDM/server/categorias")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("cat_list");
              divDatos.innerHTML="";

               // filtra la barra d busqueda
               if (search_cat !== "") {
                 data = data.filter(function(items){
                 return items.tipo.toLowerCase().indexOf(search_cat.toLowerCase()) > -1;
                 });
                 console.log(data);
               } else{}

               // si no puede traer ningun producto de la base de datos muestra un mensaje
               if (data.length == 0) {
                 const fila_nr = document.createElement("tr");
                 const non_result = document.createElement("td");
                 non_result.innerText = "Lo sentimos, no encontramos resultados para su busqueda...";
                 fila_nr.appendChild(non_result);
                 divDatos.appendChild(fila_nr);
                 console.log(non_result);
               }else{
              const thead = document.createElement("thead");
              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = "ID";
              id.scope = "col";
              const nombre = document.createElement("th");
              nombre.innerText = "Nombre";
              nombre.scope = "col";
              const descripcion = document.createElement("th");
              descripcion.innerText = "Descripcion";
              descripcion.scope = "col";
              const editar = document.createElement("th");
              editar.innerText = "Modificar";
              editar.scope = "col";
              const eliminar = document.createElement("th");
              eliminar.innerText = "Eliminar";
              eliminar.scope = "col";

              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              thead.appendChild(fila);
              divDatos.appendChild(thead);
              }

              console.log(desde_cat);

                if (desde_cat != 0) {
                btn_back_next = document.getElementById("btn_back_next_cat");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                divBack = document.createElement("div");
                divBack.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.className = "btn btn_blue";
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnBack = document.createElement("button");
                btnBack.className = "btn btn_blue";
                btnBack.innerHTML = '<i class="fa-solid fa-angles-left"></i>';

                divBack.appendChild(btnBack);
                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divBack)
                btn_back_next.appendChild(divNext)
              }else{
                btn_back_next = document.getElementById("btn_back_next_cat");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnNext.className = "btn btn_blue";

                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divNext)
              }

              btnNext.addEventListener('click', function(){
                  desde_cat += 20;
                  hasta_cat += 20;
                  lista_categorias()
              })

              if (desde_cat!=0) {
                btnBack.addEventListener('click', function(){
                  desde_cat -= 20;
                  hasta_cat -= 20;
                  lista_categorias()
                })
              }

                

              const tbody = document.createElement("tbody");

              data.map(((categoria, index) => {

              if (index>=desde_cat & index<hasta_cat) {

              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = categoria.id;
              id.scope = "row";
              const nombre = document.createElement("td");
              nombre.innerText = categoria.tipo;
              const descripcion = document.createElement("td");
              descripcion.innerText = categoria.descripcion;
              const editar = document.createElement("td");
              editar.innerHTML = '<button class="btn btn_blue" id="edit_cat'+ categoria.id + '" name"edit"><i class="fa-solid fa-pen"></i></button>';
              const eliminar = document.createElement("td");
              eliminar.innerHTML = '<button class="btn btn_red" id="delete_cat'+ categoria.id + '" name"delete"><i class="fa-solid fa-trash-can"></i></button>';


              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              tbody.appendChild(fila)
              divDatos.appendChild(tbody);

              btnEdit = document.getElementById("edit_cat" + categoria.id)

              btnEdit.addEventListener('click', function(){
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
                id_cat_bar.value = categoria.id;
                id_cat_change();
              })

              btnDelete = document.getElementById("delete_cat" + categoria.id)

              btnDelete.addEventListener('click', function(){
                var para = new URLSearchParams();
                para.append("id", categoria.id);
                location.href = "cat_delete.php?" + para.toString();
              })
              }
              }))
            });
        };

        function lista_marcas() {
          fetch("http://localhost/github/SDM/server/marcas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("marca_list");
              divDatos.innerHTML="";

               // filtra la barra d busqueda
               if (search_marca !== "") {
                 data = data.filter(function(items){
                 return items.n_marca.toLowerCase().indexOf(search_marca.toLowerCase()) > -1;
                 });
                 console.log(data);
               } else{}

               // si no puede traer ningun producto de la base de datos muestra un mensaje
               if (data.length == 0) {
                 const fila_nr = document.createElement("tr");
                 const non_result = document.createElement("td");
                 non_result.innerText = "Lo sentimos, no encontramos resultados para su busqueda...";
                 fila_nr.appendChild(non_result);
                 divDatos.appendChild(fila_nr);
                 console.log(non_result);
               }else{
              const thead = document.createElement("thead");
              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = "ID";
              id.scope = "col";
              const nombre = document.createElement("th");
              nombre.innerText = "Nombre";
              nombre.scope = "col";
              const descripcion = document.createElement("th");
              descripcion.innerText = "Descripcion";
              descripcion.scope = "col";
              const editar = document.createElement("th");
              editar.innerText = "Modificar";
              editar.scope = "col";
              const eliminar = document.createElement("th");
              eliminar.innerText = "Eliminar";
              eliminar.scope = "col";

              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              thead.appendChild(fila);
              divDatos.appendChild(thead);
              }

              console.log(desde_marca);

                if (desde_marca != 0) {
                btn_back_next = document.getElementById("btn_back_next_marca");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                divBack = document.createElement("div");
                divBack.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.className = "btn btn_blue";
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnBack = document.createElement("button");
                btnBack.className = "btn btn_blue";
                btnBack.innerHTML = '<i class="fa-solid fa-angles-left"></i>';

                divBack.appendChild(btnBack);
                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divBack)
                btn_back_next.appendChild(divNext)
              }else{
                btn_back_next = document.getElementById("btn_back_next_marca");
                btn_back_next.innerHTML="",
                divNext = document.createElement("div");
                divNext.className = "col-6";
                btnNext = document.createElement("button");
                btnNext.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
                btnNext.className = "btn btn_blue";

                divNext.appendChild(btnNext);
                btn_back_next.appendChild(divNext)
              }

              btnNext.addEventListener('click', function(){
                  desde_marca += 20;
                  hasta_marca += 20;
                  lista_marcas()
              })

              if (desde_marca!=0) {
                btnBack.addEventListener('click', function(){
                  desde_marca -= 20;
                  hasta_marca -= 20;
                  lista_marcas()
                })
              }

                

              const tbody = document.createElement("tbody");

              data.map(((marca, index) => {

              if (index>=desde_marca & index<hasta_marca) {

              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = marca.id;
              id.scope = "row";
              const nombre = document.createElement("td");
              nombre.innerText = marca.n_marca;
              const descripcion = document.createElement("td");
              descripcion.innerText = marca.descripcion;
              const editar = document.createElement("td");
              editar.innerHTML = '<button class="btn btn_blue" id="edit_marca'+ marca.id + '" name"edit"><i class="fa-solid fa-pen"></i></button>';
              const eliminar = document.createElement("td");
              eliminar.innerHTML = '<button class="btn btn_red" id="delete_marca'+ marca.id + '" name"delete"><i class="fa-solid fa-trash-can"></i></button>';


              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              tbody.appendChild(fila)
              divDatos.appendChild(tbody);

              btnEdit = document.getElementById("edit_marca" + marca.id)

              btnEdit.addEventListener('click', function(){
                function findPos(obj) {
                  var curtop = 0;
                  if (obj.offsetParent) {
                      do {
                          curtop += obj.offsetTop;
                      } while (obj = obj.offsetParent);
                  return [curtop];
                  }
                }
                window.scroll(0,findPos(document.getElementById("marca_upl_edit")));
                id_marca_bar.value = marca.id;
                id_marca_change();
              })

              btnDelete = document.getElementById("delete_marca" + marca.id)

              btnDelete.addEventListener('click', function(){
                var para = new URLSearchParams();
                para.append("id", marca.id);
                location.href = "marca_delete.php?" + para.toString();
              })
              }
              }))
            });
        };

      document.addEventListener("DOMContentLoaded", function (event) {
        filtros_areas()
        filtros_categorias()
        filtros_marcas()
        lista_productos() 
        lista_areas() 
        lista_categorias()
        lista_marcas()
      });
<nav>
	<div class="logo"><h1>Sol de Mayo</h1></div>
	<div class="openMenu"><i class="fa fa-bars"></i></div>
	<ul class="mainMenu">
		<div class="nav_radios">
			<li>
				<input type="radio" name="nav_radios" id="noticias">
				<label for="noticias" id="l_noticas"><a href="#">Noticias</a></label>
			</li>
			<li>
				<input type="radio" name="nav_radios" id="productos">
				<label for="productos" id="l_productos"><a href="front.php">Productos</a></label>
			</li>
			<li>
				<input type="radio" name="nav_radios" id="modulos">
				<label for="modulos" id="l_modulos"><a href="#">Modulos</a></label>
			</li>
			<li>
				<input type="radio" name="nav_radios" id="administrar">
				<label for="administrar" id="l_administrar"><a href="admin.php">Administrar</a></label>
			</li>
			<li>
				<input type="radio" name="nav_radios" id="contactos">
				<label for="contactos" id="l_contactos"><a href="#">Contactos</a></label>
			</li>
			<li>
				<input type="radio" name="nav_radios" id="sobre_nosotros">
				<label for="sobre_nosotros" id="l_sobre_nosotros"><a href="#">Sobre nosotros</a></label>
			</li>
		</div>
		<div class="closeMenu"><i class="fa fa-times"></i></div>
		<span class="icons">
			<i class="fab fa-facebook"></i>
			<i class="fab fa-instagram"></i>
			<i class="fab fa-twitter"></i>
			<i class="fab fa-github"></i>
		</span>
	</ul>
</nav>
<script type="text/javascript">
	<?php
    echo "var target_radio ='$target_radio';";
 	?>
   	console.log(target_radio);
   	switch (target_radio){
   		case '1':
   			var noticias = document.getElementById("noticias");
   			var l_noticias = document.getElementById("l_noticias");
   			noticias.checked = true;
   			l_noticias.className += "target";
   		break;
   		case '2':
   			var productos = document.getElementById("productos");
   			var l_productos = document.getElementById("l_productos");
   			productos.checked = true;
   			l_productos.className += "target";
   		break;
   		case '3':
   			var modulos = document.getElementById("modulos");
   			var l_modulos = document.getElementById("l_modulos");
   			modulos.checked = true;
   			l_modulos.className += "target";
   		break;
   		case '4':
   			var administrar = document.getElementById("administrar");
   			var l_administrar = document.getElementById("l_administrar");
   			administrar.checked = true;
   			l_administrar.className += "target";

   		break;
   		case '5':
   			var contactos = document.getElementById("contactos");
   			var l_contactos = document.getElementById("l_contactos");
   			contactos.checked = true;
   			l_contactos.className += "target";
   		break;
   		case '6':
   			var sobre_nosotros = document.getElementById("sobre_nosotros");
   			var l_sobre_nosotros = document.getElementById("l_sobre_nosotros");
   			sobre_nosotros.checked = true;
   			l_sobre_nosotros.className += "target";
   		break;
   	}

   	console.log(window.location.href);
</script>
<script type="text/javascript" src="js/navbar.js"></script>
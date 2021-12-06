<?php 

include "../server/conexion.php";

$id_cat=$_REQUEST["id_cat"];
$nombre_cat=$_REQUEST["nombre_cat"];
$descripcion_cat=$_REQUEST["descripcion_cat"];

$sql = "UPDATE `categoria` SET tipo = '$nombre_cat' , descripcion = '$descripcion_cat' where `id`='$id_cat'";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
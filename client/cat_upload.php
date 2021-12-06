<?php 

include "../server/conexion.php";

$id_cat=$_REQUEST["id_cat"];
$nombre_cat=$_REQUEST["nombre_cat"];
$descripcion_cat=$_REQUEST["descripcion_cat"];


$sql = "INSERT INTO `categoria` (`id`, `tipo`, `descripcion`) VALUES (NULL, '$nombre_cat', '$descripcion_cat')";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
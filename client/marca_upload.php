<?php 

include "../server/conexion.php";

$id_marca=$_REQUEST["id_marca"];
$nombre_marca=$_REQUEST["nombre_marca"];
$descripcion_marca=$_REQUEST["descripcion_marca"];


$sql = "INSERT INTO `marca` (`id`, `n_marca`, `descripcion`) VALUES (NULL, '$nombre_marca', '$descripcion_marca')";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
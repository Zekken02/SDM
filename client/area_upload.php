<?php 

include "../server/conexion.php";

$id_area=$_REQUEST["id_area"];
$nombre_area=$_REQUEST["nombre_area"];
$descripcion_area=$_REQUEST["descripcion_area"];


$sql = "INSERT INTO `area` (`id`, `n_area`, `desc_area`) VALUES (NULL, '$nombre_area', '$descripcion_area')";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
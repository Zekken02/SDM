<?php 

include "../server/conexion.php";

$id_marca=$_REQUEST["id_marca"];
$nombre_marca=$_REQUEST["nombre_marca"];
$descripcion_marca=$_REQUEST["descripcion_marca"];

$sql = "UPDATE `marca` SET n_marca = '$nombre_marca' , descripcion = '$descripcion_marca' where `id`='$id_marca'";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
<?php 

include "../server/conexion.php";

$id_area=$_REQUEST["id_area"];
$nombre_area=$_REQUEST["nombre_area"];
$descripcion_area=$_REQUEST["descripcion_area"];

$sql = "UPDATE `area` SET n_area = '$nombre_area' , desc_area = '$descripcion_area' where `id`='$id_area'";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
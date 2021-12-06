<?php 
include '../server/conexion.php';
$ID = $_REQUEST['id'];
$sql = "DELETE FROM `marca` WHERE id= $ID";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;
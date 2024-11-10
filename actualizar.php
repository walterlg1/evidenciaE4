<?php
include 'db.php';

$tabla = $_POST['tabla'];
$id = $_POST['id'];
$nombre = $_POST['nombre'];

$sql = "UPDATE $tabla SET nombre='$nombre' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Registro actualizado exitosamente";
} else {
    echo "Error al actualizar el registro: " . $conn->error;
}
$conn->close();
?>

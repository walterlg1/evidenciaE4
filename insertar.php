<?php
include 'db.php';

$tabla = $_POST['tabla'];
$nombre = $_POST['nombre'];

$sql = "INSERT INTO $tabla (nombre) VALUES ('$nombre')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado exitosamente";
} else {
    echo "Error al insertar el registro: " . $conn->error;
}
$conn->close();
?>

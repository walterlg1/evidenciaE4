<?php
include 'db.php';

$tabla = $_GET['tabla'];
$sql = "SELECT * FROM $tabla";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Nombre: " . $row["nombre"]. "<br>";
    }
} else {
    echo "0 resultados";
}
$conn->close();
?>

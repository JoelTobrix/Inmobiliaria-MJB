<?php
header("Content-Type: image/png");

$conn = new mysqli('localhost', 'Grupo10.', 'Inmobiliaria_5939863@2025', 'inmobiliaria_mjb');

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = $_GET['id'];  // ID de la propiedad

$sql = "SELECT imagen FROM propiedades WHERE idPropiedad = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($imagen);
$stmt->fetch();

if ($imagen) {
    echo $imagen;  // Mostrar la imagen en formato binario
} else {
    echo "No se encontró la imagen";
}

$stmt->close();
$conn->close();
?>

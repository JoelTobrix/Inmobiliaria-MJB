<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = new mysqli('localhost', 'Grupo10.', 'Inmobiliaria_5939863@2025', 'inmobiliaria_mjb');

if ($conn->connect_error) {
    die(json_encode(["estado" => false, "mensaje" => "Conexión fallida: " . $conn->connect_error]));
}

// Verificar si se recibió una imagen
if (!isset($_FILES['imagen'])) {
    echo json_encode(["estado" => false, "mensaje" => "Error: No se recibió ninguna imagen"]);
    exit;
}

// Leer el contenido del archivo y convertirlo en binario
$imagen_binario = file_get_contents($_FILES['imagen']['tmp_name']);

// Datos del formulario
$titulo = $_POST['titulo'];
$precio = $_POST['precio'];
$ubicacion = $_POST['ubicacion'];

// Obtener idUsuario del formulario
if (!isset($_POST['idUsuario'])) {
    echo json_encode(["estado" => false, "mensaje" => "Error: idUsuario no recibido"]);
    exit;
}
$idUsuario = $_POST['idUsuario'];

// Validar idUsuario (opcional)
$sql_validar = "SELECT * FROM usertable WHERE idUsuario = ?";
$stmt_validar = $conn->prepare($sql_validar);
$stmt_validar->bind_param("s", $idUsuario);
$stmt_validar->execute();
$stmt_validar->store_result();
if ($stmt_validar->num_rows == 0) {
    echo json_encode(["estado" => false, "mensaje" => "Error: idUsuario no válido"]);
    exit;
}

// Generar idPropiedad único
$idPropiedad = uniqid();

// Insertar en la base de datos (con idPropiedad e idUsuario)
$sql = "INSERT INTO propiedades (idPropiedad, titulo, precio, ubicacion, imagen, idUsuario) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssdsss", $idPropiedad, $titulo, $precio, $ubicacion, $imagen_binario, $idUsuario);

if ($stmt->execute()) {
    echo json_encode(["estado" => true, "mensaje" => "Propiedad insertada correctamente"]);
} else {
    echo json_encode(["estado" => false, "mensaje" => "Error al insertar propiedad: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
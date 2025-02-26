<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset = UTF-8");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, x-Requested-With");
//Conexion a la base de datos

$conn = new mysqli('localhost','Grupo10.','Inmobiliaria_5939863@2025','inmobiliaria_mjb');
if ($conn->connect_error) {
    die(json_encode(["message" => "Conexión fallida: " . $conn->connect_error]));
}
// Obtener los datos enviados en el cuerpo de la petición
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['usuario'], $data['nombre'], $data['descripcion'], $data['pass'], $data['correo'], $data['activo'])) {
    echo json_encode(["estado" => false, "mensaje" => "Faltan datos en la solicitud"]);
    exit;
}

// Sanitizar datos para evitar inyección SQL
$usuario = $conn->real_escape_string($data['usuario']);
$nombre = $conn->real_escape_string($data['nombre']);
$descripcion = $conn->real_escape_string($data['descripcion']);
$pass = password_hash($data['pass'], PASSWORD_DEFAULT); // Hashear contraseña
$correo = $conn->real_escape_string($data['correo']);
$activo = $data['activo'] ? 1 : 0;

// Consulta SQL para insertar datos
$sql = "INSERT INTO usertable (NombreUsuario, Descripcion, Contraseña, Email, Active) 
        VALUES ('$usuario', '$descripcion', '$pass', '$correo', '$activo')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["estado" => true, "mensaje" => "Usuario registrado con éxito"]);
} else {
    echo json_encode(["estado" => false, "mensaje" => "Error: " . $conn->error]);
}

$conn->close();
?>
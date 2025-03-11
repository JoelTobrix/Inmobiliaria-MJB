<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = new mysqli('localhost', 'Grupo10.', 'Inmobiliaria_5939863@2025', 'inmobiliaria_mjb');

if ($conn->connect_error) {
    die(json_encode(["estado" => false, "mensaje" => "Conexión fallida: " . $conn->connect_error]));
}

// Obtener los datos enviados en la petición
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['IdUsuario'], $data['usuario'], $data['nombre'], $data['descripcion'], $data['pass'], $data['correo'], $data['activo'], $data['RollId'])) {
    echo json_encode(["estado" => false, "mensaje" => "Faltan datos en la solicitud"]);
    exit;
}

// Sanitizar y procesar datos
$idUsuario = $conn->real_escape_string($data['IdUsuario']);
$usuario = $conn->real_escape_string($data['usuario']);
$nombre = $conn->real_escape_string($data['nombre']);
$descripcion = $conn->real_escape_string($data['descripcion']);
$pass = password_hash($data['pass'], PASSWORD_DEFAULT);
$correo = $conn->real_escape_string($data['correo']);
$activo = ($data['activo'] == 1 || $data['activo'] == 'true') ? 1 : 0;
$RollId = $conn->real_escape_string($data['RollId']);

// Insertar datos en la base de datos
$sql_user = "INSERT INTO usertable (IdUsuario, NombreUsuario, Nombre, Descripcion, Contraseña, Email, Active) 
             VALUES ('$idUsuario', '$usuario', '$nombre', '$descripcion', '$pass', '$correo', '$activo')";

if ($conn->query($sql_user) === TRUE) {
    // Insertar rol en userroltable
    $sql_role = "INSERT INTO userroltable (RollId, idUsuario) VALUES ('$RollId', '$idUsuario')";
    if ($conn->query($sql_role) === TRUE) {
        echo json_encode(["estado" => true, "mensaje" => "Usuario registrado con éxito y rol asignado"]);
    } else {
        // Si falla la asignación del rol, puedes optar por eliminar el usuario recién creado
        $conn->query("DELETE FROM usertable WHERE IdUsuario = '$idUsuario'");
        echo json_encode(["estado" => false, "mensaje" => "Error al asignar rol: " . $conn->error]);
    }
} else {
    echo json_encode(["estado" => false, "mensaje" => "Error al registrar usuario: " . $conn->error]);
}

$conn->close();
?>
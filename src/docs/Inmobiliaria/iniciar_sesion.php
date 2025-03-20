<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Conexión a la base de datos
$conn = new mysqli('localhost', 'Grupo10.', 'Inmobiliaria_5939863@2025', 'inmobiliaria_mjb');

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Error de conexión: " . $conn->connect_error]));
}

// Obtener datos de la petición
$data = json_decode(file_get_contents("php://input"));

if (isset($data->usuario) && isset($data->contrasenia)) {
    $usuario = $conn->real_escape_string($data->usuario);
    $contrasenia = $data->contrasenia;

    // Consulta mejorada para permitir solo clientes
    $SQL = "SELECT u.IdUsuario, u.Contraseña, r.RoleNombre 
            FROM usertable u
            JOIN userroltable ur ON u.IdUsuario = ur.IdUsuario
            JOIN roles r ON ur.RollId = r.RollId
            WHERE u.NombreUsuario = ? AND r.RoleNombre = 'cliente'";
    
    $stmt = $conn->prepare($SQL);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($contrasenia, $row['Contraseña'])) {
            echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso"]);
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Usuario no encontrado o no es cliente"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
}

$conn->close();
?>

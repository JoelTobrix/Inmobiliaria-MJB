<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Conexión a la base de datos
$conn = new mysqli('localhost', 'Grupo10.', 'Inmobiliaria_5939863@2025', 'inmobiliaria_mjb');
// Verificar conexión
if ($conn->connect_error) {
    die("Falla en la conexión: " . $conn->connect_error);
}

// Obtener datos de la petición
$data = json_decode(file_get_contents("php://input"));

if (isset($data->correo) && isset($data->contrasenia)) {
    $correo = $conn->real_escape_string($data->correo);
    $contrasenia = $data->contrasenia;

    // Consulta a la base de datos para verificar el rol de administrador y obtener idUsuario
    $SQL = "SELECT u.IdUsuario, u.Contraseña, r.RoleNombre 
                FROM usertable u
                JOIN userroltable ur ON u.IdUsuario = ur.IdUsuario
                JOIN roles r ON ur.RollId = r.RollId
                WHERE u.Email = ? AND r.RoleNombre = 'administrador'";
    
    $stmt = $conn->prepare($SQL);
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        // Verificar contraseña
        if (password_verify($contrasenia, $row['Contraseña'])) {
            // Incluir idUsuario en la respuesta JSON
            echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso", "idUsuario" => $row['IdUsuario']]);
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Usuario no encontrado o no es administrador"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
}

$conn->close();
?>
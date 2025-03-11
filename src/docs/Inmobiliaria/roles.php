<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli('localhost', 'Grupo10.', 'Inmobiliaria_5939863@2025', 'inmobiliaria_mjb');

if ($conn->connect_error) {
  die(json_encode(["estado" => false, "mensaje" => "Conexión fallida: " . $conn->connect_error]));
}

$sql = "SELECT RollId, RoleNombre FROM roles";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $roles = array();
  while ($row = $result->fetch_assoc()) {
    $roles[] = $row;
  }
  echo json_encode(["estado" => true, "roles" => $roles]);
} else {
  echo json_encode(["estado" => false, "mensaje" => "No se encontraron roles"]);
}

$conn->close();
?>
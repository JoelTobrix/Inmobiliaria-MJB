<?php
$server="localhost";
$user="Grupo10.";
$password="Inmobiliaria_5939863@2025";
$database="inmobiliaria_mjb";
 
  //Establecer la conexion a la base de datos de la Inmobiliaria MJB Quito
  $conexion = new mysqli($server,$user,$password,$database);
   if($conexion->connect_errno){
    die(" error " .$conexion-> connect_errno);
   }else{
     echo "Conectado a la Base de Datos de la Inmobiliaria";
   }
   $conexion-> close();
?>
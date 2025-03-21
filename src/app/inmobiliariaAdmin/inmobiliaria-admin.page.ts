import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmobiliaria-admin',
  templateUrl: './inmobiliaria-admin.page.html',
  styleUrls: ['./inmobiliaria-admin.page.scss'],
  standalone: false,
})
export class InmobiliariaAdminPage implements OnInit {
  type_propetie: string = "";
  price: string = "";
  location: string = "";
  propiedad: any = null; // Guarda la propiedad con la imagen
  previewImage: string | ArrayBuffer | null = null; // Vista previa de la imagen antes de subirla

  constructor() { }

  ngOnInit() {
    
  }

  

  // Manejar la selección de imagen y mostrar la vista previa
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        this.previewImage = event.target?.result as string; // Asegura el tipo correcto
      };
      reader.readAsDataURL(file);
    }
  }

  // Guardar la propiedad con la imagen
  GuardarPropiedad() {
    const formData = new FormData();
    formData.append("titulo", this.type_propetie);
    formData.append("precio", this.price);
    formData.append("ubicacion", this.location);

    // Obtener el archivo de imagen
    const fileInput = document.querySelector("input[type='file']") as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
        formData.append("imagen", fileInput.files[0]);
    } else {
        console.error("No se seleccionó imagen");
        return;
    }

    // Obtener idUsuario de localStorage (o de donde lo tengas almacenado)
    const idUsuario = localStorage.getItem('idUsuario');

    // Verificar si idUsuario existe
    if (!idUsuario) {
        console.error("Usuario no autenticado (idUsuario no encontrado)");
        return;
    }

    // Agregar idUsuario al FormData
    formData.append("idUsuario", idUsuario);

    fetch("http://localhost/inmobiliaria/propiedades.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.estado) {
                console.log("Propiedad guardada correctamente");
            } else {
                console.error("Error al guardar la propiedad:", data.mensaje);
            }
        })
        .catch(error => console.error("Error en la petición:", error));
}
}

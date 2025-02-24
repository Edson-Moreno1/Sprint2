import { Component } from '@angular/core';
import { Platillo } from '../Models/platillo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

//Definir propiedades
Desayuno: Platillo[] = [];
Comida: Platillo[] = [];
Cena: Platillo[] = [];

//Propiedad para alamcenar las categorias
selectedCategory: 'Desayuno' | 'Comida' | 'Cena' = 'Desayuno';
 selectedPlatillo: Platillo | null = null; //guarda el platillo seleccionado
 imagePreview: string | null = null; //guarda la imagen en la vista previa
 imageName: string | null = null; //guarda el nombre de la imagen en la vista previa
 calcularPrecio(platillo: Platillo): void{
   platillo.precioTotal = (platillo.cantidad || 0) * platillo.precio;
 }
 seleccionarPlatillo(platillo: Platillo): void{
  this.selectedPlatillo = platillo;  // Asignar el platillo seleccionado
 }
//Metodos
nuevoPlatillo: Platillo = {
  nombre: '',
  precio: 0,
  descripcion: '',
  imageUrl: '',
  cantidad: 1,
  precioTotal: 0
};

//Propiedad tituloplatillo
tituloPlatillo: string = '';
//Método para agregar platillo
agregarPlatillo (): void{
  if(!this.tituloPlatillo.trim()){
    return;
  } 
  const nuevo ={
    ...this.nuevoPlatillo, nombre: this.tituloPlatillo};
//Agregar platillo a la categoria seleccionada

if (this.selectedCategory === 'Desayuno'){
  this.Desayuno.push(nuevo);
} else if (this.selectedCategory === 'Comida'){
  this.Comida.push(nuevo);
}else if (this.selectedCategory === 'Cena'){
  this.Cena.push(nuevo);
}

// Limpiar el formulario
this.tituloPlatillo = '';
this.nuevoPlatillo ={ nombre:'',precio:0, descripcion:'', imageUrl: '', cantidad: 1, precioTotal: 0};
}
    //Metodo para cancelar

    cancelarPlatillo(): void {
      if(!this.selectedPlatillo) { return;
      }
      this.Desayuno = this.Desayuno.filter(p => p !== this.selectedPlatillo);
      
      this.Comida = this.Comida.filter(p => p !== this.selectedPlatillo);

      this.Cena = this.Cena.filter(p => p !== this.selectedPlatillo);

      this.selectedPlatillo = null;
    }
    



  

addNewImage(event: Event): void{
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file){
    this.imageName = file.name;
    const reader = new FileReader();
    reader.onload = ( ) => {
      this.imagePreview = reader.result as string;
      this.nuevoPlatillo.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

} // fin de la clase

function cancelarPlatillo() {
  throw new Error('Function not implemented.');
}


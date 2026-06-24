import { Component } from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto/producto';
import { Inicio } from '../inicio/inicio';


@Component({
  selector: 'app-productos',
  imports: [ProductoCard, CommonModule, Inicio],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos: Producto[] = [ 
  { id: 1, nombre: 'Gulp', precio: '$3500', descripcion: 'Primer album', imagen: 'fotos/gulp.jpeg' }, 
  { id: 2, nombre: 'Oktubre', precio: '$12000', descripcion: 'Segundo album', imagen: 'fotos/oktubre.jpg' }, 
  { id: 3, nombre: 'Un baión para el ojo idiota', precio: '$8500', descripcion: 'Tercer album', imagen: 'fotos/bang.png' }, 
   { id: 4, nombre: 'La mosca y la sopa', precio: '$10000', descripcion: 'Cuarto album', imagen: 'fotos/bang.png' }, 
  { id: 5, nombre: 'Lobo suelto', precio: '$7500', descripcion: 'Quinto album', imagen: 'fotos/lobos.jpg' }, // ... // ... 
 { id: 6, nombre: 'Cordero atado', precio: '$7500', descripcion: 'Sexto album', imagen: 'fotos/lob.jpg' }, // ... // ... 
  ]; 



   onAgregar(producto: any) {
    console.log(producto);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {}
export interface Producto { 
  id: number; 
  nombre: string; 
  precio: number; 
  descripcion: string; 
  imagen: string; 
} 
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-card',
  imports: [CommonModule],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
@Input() producto!: Producto; 
@Output() agregarAlCarrito = new EventEmitter<Producto>(); 
 
onAgregar() { 
  this.agregarAlCarrito.emit(this.producto); 
}
 
}

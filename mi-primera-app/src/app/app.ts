import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './hola.html',
  styleUrl: './app.css'
})
export class App {
nombre: string = `Enrique`
edad: number = 0
ciudad: string = `Cipolletti`
activo: boolean = true 


toggle():void{
  this.activo= !this.activo
}


destacado: boolean = false

toggleDestacado():void{
  this.destacado= !this.destacado
}
}
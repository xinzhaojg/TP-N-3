import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
 
  // Datos del perfil — tipos TypeScript obligatorios 
  nombre:     string  = 'Tu Nombre'; 
  usuario:    string  = '@tu_usuario'; 
  bio:        string  = 'Estudiante de desarrollo web · CET N° 30'; 
  urlFoto:    string  = 'https://tse4.mm.bing.net/th/id/OIP.KRDBkh86XxiCf8hp1PiL2QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'; 
  seguidores: number  = 67; 
  seguidos:   number  = 67; 
  estaOnline: boolean = true; 
  siguiendo:  boolean = false; 
 
  // Método para el botón seguir 
  toggleSeguir(): void { 
    this.siguiendo = !this.siguiendo; 
    if (this.siguiendo) { 
      this.seguidores++; 
    } else { 
      this.seguidores--; 
    } 
  } 
 
  // Método para cambiar el estado online 
  toggleOnline(): void { 
    this.estaOnline = !this.estaOnline; 
  
  } 

  
}


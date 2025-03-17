import { Component, OnInit} from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl : './carrito.component.css'})
  export class CarritoComponent implements OnInit {
    carrito: any[]=[];
    constructor(private carritoService:CarritoService, private router:Router){}
    ngOnInit():void{
      this.carrito = this.carritoService.obtenerCarrito();
    }
    eliminarProducto(index:number){
      this.carritoService.eliminarProducto(index);
    }
    generarDescargarXML(){
      const xml = this.carritoService.generarXML();
      this.carritoService.descargarXML(xml);
    }

    
    irAlCatalogo(): void {
      this.router.navigate(['/']); 
    }
    
}
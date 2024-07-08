import { Component } from '@angular/core';
import { TenisService } from '../tenis.service';
import { ITenis } from '../interfaces/tenis';

@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrl: './productos-destacados.component.css'
})
export class ProductosDestacadosComponent {



  productos: ITenis[] = [];
  listaFiltrada: ITenis[] = [];
  textoBusqueda: string = '';

  constructor(private _tenisService: TenisService) {
    this.obtenerTenis();
    this.productos = this.productos.slice(0, 3);
  }

  obtenerTenis() {
    this._tenisService.getTenis().subscribe({
      next: (data) => {
        this.productos = data.slice(0, 3);
        this.listaFiltrada = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  filtrarPorCategoria(categoria: string) {
    this.textoBusqueda = '';
    this.listaFiltrada = this.productos.filter(v => v.categoria === categoria);
  }

  obtenerTodos() {
    this.textoBusqueda = '';
    this.listaFiltrada = this.productos;
  }



  ngOnInit(): void {
    this.productos = this.productos.slice(0, 3);
  }
}

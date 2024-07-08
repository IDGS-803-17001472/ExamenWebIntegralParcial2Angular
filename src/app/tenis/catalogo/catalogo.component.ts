import { Component, OnInit } from '@angular/core';
import { ITenis } from '../interfaces/tenis';
import { TenisService } from '../tenis.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'] // Corrige el nombre de la propiedad
})
export class CatalogoComponent implements OnInit {
  productos: ITenis[] = [];
  listaFiltrada: ITenis[] = [];
  searchTerm: string = '';
  categoria: string = 'Todas';
  categorias: string[] = ['Todas', 'Deportivos', 'Casual']; // Añade más categorías según sea necesario

  constructor(private _tenisService: TenisService) {}

  ngOnInit(): void {
    this.obtenerTenis();
  }

  obtenerTenis(): void {
    this._tenisService.getTenis().subscribe(
      productos => {
        this.productos = productos;
        this.filtrarProductos();
      },
      error => console.error('Error al obtener los tenis:', error)
    );
  }

  filtrarProductos(): void {
    if (this.categoria && this.categoria !== 'Todas') {
      this.listaFiltrada = this.productos.filter(tenis => tenis.categoria === this.categoria);
    } else {
      this.listaFiltrada = this.productos;
    }

    if (this.searchTerm) {
      this.listaFiltrada = this.listaFiltrada.filter(tenis =>
        tenis.nombre?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        tenis.categoria?.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  cambiarCategoria(category: string): void {
    this.categoria = category;
    this.filtrarProductos();
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.filtrarProductos();
  }
}

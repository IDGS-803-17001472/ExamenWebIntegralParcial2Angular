import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrl: './productos-destacados.component.css'
})
export class ProductosDestacadosComponent {

  productos = [
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción breve del producto 1.',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción breve del producto 2.',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 3',
      descripcion: 'Descripción breve del producto 3.',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 4',
      descripcion: 'Descripción breve del producto 4.',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 5',
      descripcion: 'Descripción breve del producto 5.',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 6',
      descripcion: 'Descripción breve del producto 6.',
      imagen: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.productos = this.productos.slice(0, 3);
  }
}

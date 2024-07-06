import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoEmpresaComponent } from './info-empresa/info-empresa.component';
import { ProductosDestacadosComponent } from './productos-destacados/productos-destacados.component';
import { RouterLink } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    BannerComponent,
    PiePaginaComponent,
    FormularioContactoComponent,
    EncabezadoComponent,
    HomepageComponent,
    InfoEmpresaComponent,
    ProductosDestacadosComponent,
    CatalogoComponent,
    InfoComponent
  ],
  imports: [
    CommonModule, RouterLink
  ],
  exports:[
     BannerComponent, PiePaginaComponent, FormularioContactoComponent,EncabezadoComponent, HomepageComponent, InfoEmpresaComponent, ProductosDestacadosComponent
  ]
})
export class TenisModule { }

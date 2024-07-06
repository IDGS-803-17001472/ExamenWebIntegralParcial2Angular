import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TenisModule } from './tenis/tenis.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TenisModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComercioTenis';
}

import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
    `
      .card {
        background-color: #343a40;
        color: white;
      }

      .container__card{
        width: 250px !important;
      }
    `,
  ],
})
export class ResultadosComponent {
  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}
}

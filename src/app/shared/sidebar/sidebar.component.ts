import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent{

  public resolutionTiny: boolean = false

  get historial():string[]{
    return this.giftService.historial;
  }

  constructor(private giftService:GifsService) {
    this.resolutionTiny = window.innerWidth > 764
  }


  buscar(termino: string){
    this.giftService.buscarGifs(termino);
  }
}

import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  get historial():string[]{
    return this.giftService.historial;
  }

  constructor(private giftService:GifsService) { }


  buscar(termino: string){
    this.giftService.buscarGifs(termino);
  }
}

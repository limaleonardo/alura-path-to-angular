import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project01-ByteBank';

  transferencia: {destino: number, valor: number} | undefined;

  transferir($event: { destino: number, valor: number }){
    this.transferencia = $event;
  }

}

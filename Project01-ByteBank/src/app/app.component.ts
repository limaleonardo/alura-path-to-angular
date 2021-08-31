import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project01-ByteBank';

  destino: number | undefined;
  valor: number | undefined;

  transferir($event: { destino: number, valor: number }){
    console.log($event);
    this.destino = $event.destino;
    this.valor = $event.valor;

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}

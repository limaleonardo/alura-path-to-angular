import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project01-ByteBank';
  
  transferencias: [{ destino: number, valor: number, data: Date }] | any[] = [];

  transferir($event: { destino: number, valor: number }){
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }

}

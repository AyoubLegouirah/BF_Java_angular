import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.scss'
})
export class DemoBindingsComponent {
  formateur: string = 'Seb';
  placeHolderText: string = 'Saisir un nom';

  name: string[] = ['Osmane', 'Amin', 'Ayoub', 'Nicolas','Joeffrey', 'Christopher', 'Ana Maria'];

  result: string | null = null;

  getResult(): void {
    let looser = this.name[Math.floor(Math.random() * this.name.length)];
    let winner = this.name[Math.floor(Math.random() * this.name.length)];
    this.result = `${looser} a été tiré au sort et ${winner} a gagné`;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
heroes:string [] = ['Spiderman','Iroman','Hulk','Thor','Capitan America'];
heroesBorrados:string []=[]
borrarHeroe(){
  const heroborrado = this.heroes.shift()||''
  this.heroesBorrados.push(heroborrado)
  console.log(heroborrado)
}



}

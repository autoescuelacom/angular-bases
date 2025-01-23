import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string ='ironman';
  public age: number = 45;

  //se ve como propiedad pero es un metodo
get capitalizedName(): string{
  return this.name.toUpperCase();
}

//metodo, si le pongo private no lo puedo llamar en el html, solo dentro de la clase
getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}

changeHero(): void{
this.name = 'spiderman';
}

changeAge(): void{
  this.age = 25;

}

resetForm(): void{
 this.name = 'ironman';
 //document.querySelector('h1') coge el primer h1
 //tener mucho cuidado con este codigo, no se debe hacer
 //document.querySelectorAll('h1')!.forEach(element =>{element.innerHTML = '<h1>Desde Angular</h1>'})
  this.age = 45;
}
}

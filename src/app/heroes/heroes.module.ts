import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  //si no importo esto, peta los ngif porque estoy encapsulando los modulos
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}



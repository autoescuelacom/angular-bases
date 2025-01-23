import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter.component";


//lo puedo usar dentro de la carpeta components como lo quiero usar en el app.component que es otro modulo
//lo tengo que exportar
@NgModule({
  declarations:[
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}

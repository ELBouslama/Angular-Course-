import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcompComponent } from './excomp/excomp.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ListeComponentComponent } from './liste-component/liste-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { RainbowComponentComponent } from './directives/rainbow-component/rainbow-component.component';
import { RainbowDirectiveDirective } from './directives/rainbow-directive.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    ExcompComponent,
    CardComponent,
    CvComponentComponent,
    ListeComponentComponent,
    ItemComponentComponent,
    RainbowComponentComponent,
    RainbowDirectiveDirective,
    DefaultImagePipe,
    TodoManagerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

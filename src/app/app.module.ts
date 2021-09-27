import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { HomeComponent } from './home/home.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    SobreNosComponent,
    InicioComponent,
    TemaEditComponent,
    TemaComponent,
    PostagemEditComponent,
    TemaDeleteComponent,
    PostagemDeleteComponent,
    HomeComponent,
    UsuarioEditComponent,
    NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{
    provide : LocationStrategy,
    useClass : HashLocationStrategy
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

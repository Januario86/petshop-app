import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importe o RouterModuleimport { RouterModule } from '@angular/router'; // Importe o RouterModule
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserService } from './service/user.service';
import { AppRoutingModule } from './app-routing';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,RouterModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Pages/error/error.component';
import { LoginComponent } from './Pages/login/login.component';
import { WelcomeComponent } from './Pages/welcome/welcome.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "welcome", component: WelcomeComponent },
  { path: "error", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

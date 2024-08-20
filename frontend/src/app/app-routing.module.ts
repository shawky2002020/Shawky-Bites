import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { tag } from './components/partials/header/shared/models/tags';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchterm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

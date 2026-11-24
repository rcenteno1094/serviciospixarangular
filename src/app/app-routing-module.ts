import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreatePixarComponent } from './components/create-pixar-component/create-pixar-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreatePixarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

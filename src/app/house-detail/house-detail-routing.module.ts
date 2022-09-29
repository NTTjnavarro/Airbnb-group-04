import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: HouseDetailComponent
  },
  {
    path: '**',
    redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseDetailRoutingModule { }

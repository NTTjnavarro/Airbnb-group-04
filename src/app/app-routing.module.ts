import { HouseListComponent } from './components/house-list/house-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HouseListComponent
  },
  {
    path: 'detail',
    loadChildren: () => import('./house-detail/house-detail.module').then(m => m.HouseDetailModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

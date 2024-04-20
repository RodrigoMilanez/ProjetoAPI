import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { RepositoriesComponent } from './Repositories/repositories.component';

const routes: Routes = [
  {
    path: 'profile',
    component: Tab1Page,
  },
  {
      path: 'repositories/:user',
      component: RepositoriesComponent
  },
  {
      path: '**',
      pathMatch: "full",
      redirectTo: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from './GitService';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './Repositories/repositories.component';

const routes: Routes = [{
  path: 'user',
  component: Tab1Page,
}]

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page, RepositoriesComponent],
  providers: [GitService],
})
export class Tab1PageModule {}

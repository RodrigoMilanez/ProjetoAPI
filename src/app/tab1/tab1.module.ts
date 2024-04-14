import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from './GitService';

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
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page],
  providers: [GitService],
})
export class Tab1PageModule {}

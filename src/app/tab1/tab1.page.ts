import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GitService } from './GitService';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy {

  user: string = ''; 
  nome: string = ''; 
  img: string = ''; 

  activity = '';

  private subscriptions = new Subscription();

  form: FormGroup = new FormGroup({
    usuario: new FormControl('')
  })
  
  constructor(private gitService : GitService) {


  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}

  onSubmit() {
    const type = this.form.value.type;        

    const subscription = this.gitService.getActivity(type)
        .subscribe(
            (activity) => {
                this.activity = activity;
            },
            (error) => {
                console.error(error);
                alert('Error on load response from Github API')
            }
        );
    this.subscriptions.add(subscription);
    
  }

}

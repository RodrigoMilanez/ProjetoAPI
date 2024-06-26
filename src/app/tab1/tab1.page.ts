import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GitService } from './GitService';
import { GitResponse } from './tab1.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy {

  user: string = ''; 
  nome: string = ''; 
  img: string = ''; 

  activity!: GitResponse;

  private subscriptions = new Subscription();

  form: FormGroup = new FormGroup({
    
    usuario: new FormControl('', Validators.required)
  })

  
  
  constructor(private gitService : GitService) {


  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}

  onSubmit() {
    const usuario = this.form.value.usuario;        

    const subscription = this.gitService.getActivity(usuario)
        .subscribe(
            (activity) => {
                this.activity = activity;
                console.log(activity);
            },
            (error) => {
                console.error(error);
                alert('Error on load response from Github API')
            }
        );
    this.subscriptions.add(subscription);
    
  }

}

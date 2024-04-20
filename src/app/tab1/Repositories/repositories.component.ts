import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GitService } from "../GitService";
import { Subscription } from "rxjs";
import { GitRepository } from "../tab1.model";

@Component({
    templateUrl: './repositories.page.html'
})
export class RepositoriesComponent implements OnInit, OnDestroy {
    private subscription = new Subscription();

    repositories: GitRepository[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private githubService: GitService
    ) { }


    ngOnInit(): void {
        const user = this.activatedRoute.snapshot.params['user'];

        this.subscription.add(
            this.githubService.getRepositories(user).subscribe(
                response => {
                    console.log(response)
                    this.repositories = response;
                },
                () => alert('Erro ao buscar repositórios')
            )
        )
    }


    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
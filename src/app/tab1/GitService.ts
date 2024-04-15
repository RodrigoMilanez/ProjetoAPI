
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { GitResponse } from "./tab1.model";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GitService {

    constructor(private httpClient: HttpClient) { }

    getActivity(user: string): Observable<GitResponse> {

        return this.httpClient.get<GitResponse>(
            'https://api.github.com/users/' + user
        ).pipe(
            map((response) => response )
        )
    }
}
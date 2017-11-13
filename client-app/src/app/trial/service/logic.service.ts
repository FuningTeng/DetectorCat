import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class LogicService {
  myHeader: Headers;
  constructor(private http: Http) {
    this.myHeader = new Headers();
    this.myHeader.append('Content-Type', 'application/json');
    console.log('LogicService Initialized...');
  }
  dpllsatisfiable(kb: string) {
    return this.http.post(`${environment.aiURL}/dpllsatisfiable`, { knowledgebase: kb }, { headers: this.myHeader }).map(res => {
        if (res.status < 200 || res.status > 300) {
            throw new Error('dpllsatisfiable has failed ' + res.status);
        } else {
            return res.json();
        }
    });
}
}

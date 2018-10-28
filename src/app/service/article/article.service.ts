import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticleList() {
    return this.http.get<any[]>(environment.bcs + '/bcs/article/articleList');
  }

  public createArticle(article): Observable<any> {
    return this.http.post(environment.bcs + '/bcs/article/articleCreate', article);
  }
}

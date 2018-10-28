import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageArticleListComponent } from './component/page-article-list/page-article-list.component';
import { PageArticleCreateComponent } from './component/page-article-create/page-article-create.component';

const routes: Routes = [
  { path: 'list', component: PageArticleListComponent },
  { path: 'create', component: PageArticleCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageArticleRoutingModule { }

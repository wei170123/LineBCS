import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../../service/article/article.service';

@Component({
  selector: 'app-page-article-create',
  templateUrl: './page-article-create.component.html',
  styleUrls: ['./page-article-create.component.css']
})
export class PageArticleCreateComponent implements OnInit {
  formData = {
    title: "",
    author: "",
    imgLink: "",
    content: ""
  }

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
  }

  createArticle() {

    console.log(this.formData);
    if (this.formData.title == "") {
      alert("請確認欄位內容!");
      return;
    }
    if (this.formData.author == "") {
      alert("請確認欄位內容!");
      return;
    }
    if (this.formData.imgLink == "") {
      alert("請確認欄位內容!");
      return;
    }
    if (this.formData.content == "") {
      alert("請確認欄位內容!");
      return;
    }

    this.articleService.createArticle(this.formData)
      .subscribe(
        (data) => {
          // console.log(data);
          alert('新增成功!')
          this.router.navigateByUrl('/bcs/article/list');
        },
        (err) => {
          // console.info(err);
          alert('新增失敗，請洽服務人員!');
        }
      );
  }
}

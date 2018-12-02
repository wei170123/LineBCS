import { Component, OnInit } from '@angular/core';

import { TraceLinkService } from '../../../../service/traceLink/trace-link.service';

@Component({
  selector: 'app-page-link-tracing-create',
  templateUrl: './page-link-tracing-create.component.html',
  styleUrls: ['./page-link-tracing-create.component.css']
})
export class PageLinkTracingCreateComponent implements OnInit {

  targetLink: any;
  traceLink: any;

  constructor(private traceLinkService: TraceLinkService) { }

  ngOnInit() {
  }

  createLink() {
    var rq = {
      targetLink: this.targetLink
    }

    this.traceLinkService.createTraceLinkist(rq).subscribe(
      (data) => {
        this.traceLink = data.traceLink;
        alert("建立完成!");
      },
      (err) => {
        // console.info(err);
        alert('新增失敗，請洽服務人員!');
      }
    );
  }
}

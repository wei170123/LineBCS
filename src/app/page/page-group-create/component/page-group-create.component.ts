import { Component, OnInit } from '@angular/core';

import { GroupModel } from '../../../model/group-model';

import { GroupService } from '../../../service/group/group.service';

@Component({
  selector: 'app-page-group-create',
  templateUrl: './page-group-create.component.html',
  styleUrls: ['./page-group-create.component.css']
})
export class PageGroupCreateComponent implements OnInit {
  formData: GroupModel = {
    groupName: '',
    groupDescription: '',
    groupUid: []
  };

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

  createGroup() {
    this.groupService.createGroup(this.formData)
    .subscribe(() => {
      alert('新增成功!')
    }, (err) => {
      alert(err);
    });
  }
}

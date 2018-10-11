import { Component, OnInit } from '@angular/core';

import { GroupModel } from '../../../model/group-model';

import { GroupService } from '../../../service/group/group.service';

@Component({
  selector: 'app-page-group-create',
  templateUrl: './page-group-create.component.html',
  styleUrls: ['./page-group-create.component.css']
})
export class PageGroupCreateComponent implements OnInit {
  fileName: string;
  formData: GroupModel = {
    groupName: '',
    groupDescription: '',
    groupMainId: 0
  };

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = event.target.files[0];
    this.groupService.uploadFile(file).subscribe(data => {
      console.log(data);
      if (data == "200") {
        this.fileName = file.name;
        alert("上傳成功");
      } else {
        alert("上傳失敗");
      }
    });
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

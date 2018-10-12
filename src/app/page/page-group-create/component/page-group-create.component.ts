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
      if (data && data.result == "Success") {
        this.fileName = file.name;
        this.formData.groupMainId = data.id;
        alert("上傳成功");
      } else {
        alert("上傳失敗");
      }
    });
  }

  createGroup() {
    console.log(this.formData);
    if (this.formData.groupName === '') {
      alert("請輸入群組名稱");
    }
    if (this.formData.groupMainId == 0) {
      alert("請上傳\"群組成員\"檔案");
    }
    this.groupService.createGroup(this.formData)
      .subscribe(
        (data) => {
          // console.log(data);
          alert('新增成功!')
        },
        (err) => {
          // console.info(err);
          alert('新增失敗，請洽服務人員!');
        }
      );
  }
}

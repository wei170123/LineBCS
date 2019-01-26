import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UploadFileService } from '../../../../service/upload/upload-file.service';
import { SportsService } from '../../../../service/sport/sports.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-page-sport-self-create',
  templateUrl: './page-sport-self-create.component.html',
  styleUrls: ['./page-sport-self-create.component.css']
})
export class PageSportSelfCreateComponent implements OnInit {

  sportName;
  sportContent;
  uid;
  userUploadImages;
  imgList: string[] = [];

  constructor(private sportsService: SportsService, private uploadFileService: UploadFileService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.uid = params['uid'];
      this.uploadFileService.getUploadFile(this.uid).subscribe(data => {
        console.log(data);
        if (data && data.result == "Success") {
          console.log(data.data);
          for (var d of data.data) {
            d.resourceTitle = environment.bcs + "/userUploads/" + d.resourceTitle;
            d["check"] = false;
          }

          this.userUploadImages = data.data;
        } else {
          alert("取得失敗");
        }
      });
    });
  }

  changeState(imgId: string) {
    for (var img of this.userUploadImages) {
      if (imgId == img.referenceId) {
        img.check = !img.check;
      }
    }
    console.log(this.userUploadImages);
  }

  createSelfSport() {
    this.imgList = [];
    for (var img of this.userUploadImages) {
      if (img.check == true) {
        this.imgList.push(img.referenceId);
      }
    }

    var postData = {
      uid: this.uid,
      sportName: this.sportName,
      sportContent: this.sportContent,
      sportImgId: JSON.stringify(this.imgList)
    };
    console.log(postData);

    this.sportsService.createSelfSport(postData).subscribe(data => {
      console.log(data);
      if (data && data.result == "Success") {

        alert("建立成功");
      } else {
        alert("建立失敗");
      }
    });
  }
}

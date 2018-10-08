import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { LineUserDetails } from '../../../model/friendList-model';
import { DataService } from '../../../service/data/data.service';

@Component({
  selector: 'app-page-friend-list',
  templateUrl: './page-friend-list.component.html',
  styleUrls: ['./page-friend-list.component.css']
})
export class PageFriendListComponent implements OnInit {
  lineUserDetails;
  // lineUserDetails: LineUserDetails[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getFriendList()
      .subscribe(
        x => {
          this.lineUserDetails = new MatTableDataSource(x);
          // console.log(this.lineUserDetails);
        }
      );
  }

}

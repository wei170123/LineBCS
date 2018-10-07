import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LineUserDetails } from '../../model/friendList-model';
import { DataService } from '../../service/data/data.service';

@Component({
  selector: 'app-page-friend-list',
  templateUrl: './page-friend-list.component.html',
  styleUrls: ['./page-friend-list.component.css']
})
export class PageFriendListComponent implements OnInit {
  lineUserDetails: LineUserDetails[];

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.lineUserDetails = this.data.getFriendList();
    console.log(this.data.getFriendList());
  }

}

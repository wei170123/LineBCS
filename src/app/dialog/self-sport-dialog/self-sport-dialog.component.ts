import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-self-sport-dialog',
  templateUrl: './self-sport-dialog.component.html',
  styleUrls: ['./self-sport-dialog.component.css']
})
export class SelfSPortDialogComponent implements OnInit {

  imgId;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.imgId = this.data.referenceId
  }

}

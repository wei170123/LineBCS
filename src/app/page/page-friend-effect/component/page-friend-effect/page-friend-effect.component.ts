import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DatePipe } from '@angular/common';

import { LogLineUserService } from '../../../../service/log/log-line-user.service';

@Component({
  selector: 'app-page-friend-effect',
  templateUrl: './page-friend-effect.component.html',
  styleUrls: ['./page-friend-effect.component.css']
})
export class PageFriendEffectComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;

  startDate = new Date(new Date().setDate(new Date().getDate() - 14));
  endDate = new Date();
  effectFriendAmount = 0;
  newFriendAmount = 0;
  blockFriendAmount = 0;

  totalFriend: any;
  followFriend: any;
  blockFriend: any;

  constructor(private logLineUserService: LogLineUserService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.dataInit();

  }

  dataInit() {
    // console.log("dataInit");
    this.logLineUserService.getEffectFriend().subscribe(
      data => {
        this.effectFriendAmount = data.amount;
      }
    );
    this.logLineUserService.getNewFriend(this.transformDate(this.startDate), this.transformDate(this.endDate)).subscribe(
      data => {
        this.newFriendAmount = data.amount;
      }
    );
    this.logLineUserService.getNewFriendArrayData(this.transformDate(this.startDate), this.transformDate(this.endDate)).subscribe(
      data => {
        var tmpLabel = [];
        var tmpData = [];
        for (var key in data) {
          tmpLabel.push(key);
          tmpData.push(data[key]);
        }
        this.lineChartLabels = tmpLabel;
        this.lineChartData[0].data = tmpData;

        this.chart = this.newChart(this.lineChartData);
      }
    );
  }

  search() {
    this.dataInit();
  };

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  public lineChartLabels: Array<any> = ['11/26', '11/27', '11/28', '11/29', '11/30', '12/1', '12/2'];
  // lineChart
  public lineChartData: Array<any> = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: '新增好友',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#00FF00',
      pointBackgroundColor: '#00FF00',
      pointBorderColor: '#00FF00',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    // ,
    // {
    //   data: [28, 48, 40, 19, 86, 27, 90],
    //   label: '封鎖好友',
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: '#000000',
    //   pointBackgroundColor: '#000000',
    //   pointBorderColor: '#000000',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // }
  ];

  private newChart(dataSet: Array<any>) {
    // console.log("newChart");
    return new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.lineChartLabels,
        datasets: this.lineChartData,
      },
      options: {
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}

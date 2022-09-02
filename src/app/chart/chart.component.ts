import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart1:any;
  chart2:any;
  chart3:any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.chart1 = document.getElementById('my_first_chart'); 
    Chart.register(...registerables);
    this.loadChart();
    this.chart2 = document.getElementById('my_second_chart');
    Chart.register(...registerables);
    this.loadChart2();
    this.chart3 =document.getElementById('my_third_chart');
    Chart.register(...registerables);
    this.loadChart3();
  }
  loadChart3(){
    new Chart(this.chart3,
      {
        type:'pie',
        data:{ labels:[
          'Red',
          'Blue',
          'Yellow'
        ],
          datasets:[{
            data:[300,50,100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        }
      })
  }
  //const labels = Utils.months({count: 7});
loadChart2() : void{
  new Chart(this.chart2,{
    type:'bar',
    data:{
      labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet'],
datasets:[{
  data:[65, 59, 80, 81, 56, 55, 40],
  label: 'gestion des users',
  backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ],
  borderColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ],
  borderWidth: 1
}],
    },
    options: {
      scales:{
        y:{
          beginAtZero:true
        },
      },

    },
  });
}
  loadChart() : void{
    new Chart(this.chart1, {
      type:'line',
      data:{
        datasets:[{
          data:[10,20,15,20,35,60,70,25,55,20],
          label: 'Series 1',
          backgroundColor:'#007bff',
          tension:0.6,
          borderColor:'#007bff',
        } ,
      ],
      labels:['8h','9h','10h','11h','12h','14h','15h','16h','17h','18h'],
      },
      options:{
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid:{
              borderDash:[1,2],
              drawBorder:false
            },
             beginAtZero:true,
          },
          x:{
            grid: {
              drawBorder:false,
            },
          }, 
        },
      },
    });
  }
  count(){
    this.userService.count();
    this.userService.count().subscribe(res=>{
      console.log(res);
     // this.empList = res;
    },err=>{
      console.log("erreur")
    });
  }
}

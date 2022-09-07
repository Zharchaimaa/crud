import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { FileService } from '../services/file.service';
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
  chart4:any;
  test:any;
  n:any;
  m:any;
  o:any;
  p:any;
  q:any;r:any;s:any;t:any;
  a:any;b:any;c:any;d:any;
  mehdi:any;
  constructor(private userService : UserService,private fileService : FileService) { }

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
    this.chart4 = document.getElementById('my_fourth_chart');
    Chart.register(...registerables);
    this.loadChart4();
    this.userService.count().subscribe(res=>{
      this.n = res;
      console.log(res);
     
    },err=>{
      console.log("erreur")
    });

    this.fileService.countVNOK().subscribe(res=>{
      this.o=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

    this.fileService.countVNKO().subscribe(res=>{
      this.p=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

    this.fileService.countVDKO().subscribe(res=>{
      this.r=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

    this.fileService.countVCKO().subscribe(res=>{
      this.t=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

    this.fileService.countFileOK().subscribe(res=>{
      this.m = res;
      console.log(res);
     
    },err=>{
      console.log("erreur")
    });

    this.fileService.countVDOK().subscribe(res=>{
      this.q=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

    this.fileService.countFileOK().subscribe(res=>{
      this.c= res;
      console.log(res);
     
    },err=>{
      console.log("erreur")
    });

    this.fileService.countVMOK().subscribe(res=>{
      this.a=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

   this.fileService.countVMKO().subscribe(res=>{
      this.b=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });

    this.fileService.countVCOK().subscribe(res=>{
      this.s=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  loadChart3(){
    new Chart(this.chart3,
      {
        type:'pie',
        data:{ labels:[
          'valid name',
          'valid date',
          'valid montant',
          'valid column'
        ],
          datasets:[{
            label: 'Fichier ko',
            data:[this.t,this.p,this.o,this.n],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(50,205,50)'
            ],
            hoverOffset: 4
          }]
        }
      })
  }
  
  loadChart4(){
    new Chart(this.chart4,
      {
        type:'pie',
        data:{ labels:[
          'valid name',
          'valid date',
          'valid montant',
          'valid column'
        ]
        ,
          datasets:[{
            
            data:[10,20,40,50],
            label: 'Fichier ok',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(50,205,50)'
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
      labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','Septembre'],
datasets:[{
  data:[5, 10, 20, 12, 6, 18, 23,2,11],
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
      labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','septembre'],
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
      this.n = res;
      console.log(res);
     
    },err=>{
      console.log("erreur")
    });
  }
  countFileOk(){
    
    this.fileService.countFileOK();
    this.fileService.countFileOK().subscribe(res=>{
      this.m = res;
      console.log(res);
     
    },err=>{
      console.log("erreur")
    });
  }
  countFileKo(){
    window.location.reload();
    this.fileService.countFileOK();
    this.fileService.countFileOK().subscribe(res=>{
      this.c= res;
      console.log(res);
     
    },err=>{
      console.log("erreur")
    });
  }
  countVNOK(){
   this.test= this.fileService.countVNOK();
   console.log(this.test);
   this.mehdi=this.fileService.countVNOK().subscribe(res=>{
      this.o=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
    console.log(this.mehdi);
  }
  countVNKO(){
    this.fileService.countVNKO();
    this.fileService.countVNKO().subscribe(res=>{
      this.p=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  countVDOK(){
    this.fileService.countVDOK();
    this.fileService.countVDOK().subscribe(res=>{
      this.q=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  countVDKO(){
    this.fileService.countVDKO();
    this.fileService.countVDKO().subscribe(res=>{
      this.r=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  countVCOK(){
    this.fileService.countVCOK();
    this.fileService.countVCOK().subscribe(res=>{
      this.s=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  countVCKO(){
    this.fileService.countVCKO();
    this.fileService.countVCKO().subscribe(res=>{
      this.t=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  countVMOK(){
    this.fileService.countVMOK();
    this.fileService.countVMOK().subscribe(res=>{
      this.a=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
  countVMKO(){
    this.fileService.countVMKO();
    this.fileService.countVMKO().subscribe(res=>{
      this.b=res;
      console.log(res);
    },err=>{
      console.log("erreur");
    });
  }
}

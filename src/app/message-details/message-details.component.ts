import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../model/message';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {
id:number;
msg:Message;
msgs: Message[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private msgService: MessageService) { }

  ngOnInit(): void {
    this.msg = new Message();
    this.id = this.route.snapshot.params['id'];
    this.msgService.getMessageById(this.id).subscribe(data=>{
      console.log(data)
      this.msg=data;
    },
    err=>console.log("erreur"));
  }
  list(){
    this.router.navigate(['/gestionM'])
  }

}

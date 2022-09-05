import { Message } from './../model/message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 message:Message;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private messageService: MessageService) {
        this.message = new Message();
       }

  ngOnInit(): void {
  }
  onSubmit() {
    this.messageService.addMessage(this.message).subscribe(result => this.gotoUserList());
  }
  
  gotoUserList() {
    this.router.navigate(['/']);
  }
}

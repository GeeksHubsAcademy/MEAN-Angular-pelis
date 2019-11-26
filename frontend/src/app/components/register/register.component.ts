import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('username',{read: ElementRef,static:false})
  username;

  constructor(private userService:UserService) { }

  ngAfterViewInit(){
    console.log('After View Init ')
    setTimeout(() => { 
      console.log(this.username)
      this.username.nativeElement.focus()
     }, 0);
  }
  registrar(form){
    console.log(form)
    // this.userService.register()
    // .subscribe(res=>console.log(res))
  }
}

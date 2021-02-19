import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username='';
  status="true";
  
  getName(event :Event)
  {
   
    this.username=(<HTMLInputElement>event.target).value;
    if(this.username.length>=1)
    {
   this.status='';
    }
  
    console.log(this.username);

    
  }
  Reset()
  {
    this.username=' ';
      this.status="true";
  }



}

import { Component } from '@angular/core';
import { ArduinoService } from './services/arduino.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isOnOff: boolean = false;

  constructor(private service: ArduinoService) {}

  onOff() {
    this.isOnOff = !this.isOnOff

    // if(this.isOnOff  == true){
    //   this.isOnOff  = false
    // }else{
    //   this.isOnOff  = true
    // }

    this.service.getOn(this.isOnOff ).subscribe(res => {
      console.log(res)
    });
  }

  
}

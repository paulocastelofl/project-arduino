import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  constructor(private http: HttpClient) { }

  public getOn(isValue: boolean): Observable<any> {
    var url = '';
    if(isValue) url = 'http://192.168.0.192:3001/led/on' 
    if(!isValue) url = 'http://192.168.0.192:3001/led/off' 
   
    return this.http.get(url);
  }

  

 
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  text="Service2";
  constructor() { 
    console.log('service 2')
  }
}

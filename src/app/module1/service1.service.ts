import { Injectable } from "@angular/core";

@Injectable()
export class Service1 {
    public num: number;
    constructor(){
        this.num = Math.round(Math.random()*100);
        console.log('Service1 - constructor')
    }

}
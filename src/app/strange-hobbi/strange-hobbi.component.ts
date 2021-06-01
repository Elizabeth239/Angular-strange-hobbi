import { Component, OnInit } from '@angular/core';
//import {StrangeHobbi} from './StrangeHobbi';
import {HobbiService} from './strangeHobbi.service';
@Component({
  selector: 'app-strange-hobbi',
  template:`
  <div>
  <table>
            <tr *ngFor="let item of items">
                <td>{{item}}</td>
            </tr>
        </table>
        </div>`,
  styleUrls: ['./strange-hobbi.component.css'],
  providers: [HobbiService]
})

export class StrangeHobbiComponent implements OnInit {

	constructor(private hobbiService: HobbiService){}

	constructor() { }
	 ngOnInit():void {
  	this.items = this.skillsService.getData();
  }


}
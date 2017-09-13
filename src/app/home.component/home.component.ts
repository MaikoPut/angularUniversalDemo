import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
    itemList: Item[];

    constructor(private itemService: ItemService){}

    ngOnInit(){
        this.itemService.getItems().then(response => this.itemList = response);
    }
}

import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Item } from "../models/item.model";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService{
    endpoint = "http://59acf12afab63d001105fd14.mockapi.io/api/v1/items";

    constructor(private http : Http){}

    getItems(): Promise<Item[]>{
        return this.http.get(this.endpoint).toPromise().then(response => response.json() as Item[]);
    }
}
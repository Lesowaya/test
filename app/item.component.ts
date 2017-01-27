import {Component, Input, OnChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'child',
  templateUrl: 'app/item.component.html'
})
export class ItemComponent implements OnChanges{
    @Input() activeCategory: string;
    data: Object;
    constructor(private http: Http) {
    }

    ngOnChanges(obj: any) {
        this.activeCategory = obj.activeCategory.currentValue;
        this.makeRequest();
    }

    makeRequest(): void {
        this.http.request('https://jsworkshop.000webhostapp.com/?model=product')
            .subscribe((res: Response) => {
                this.data = res.json().filter((item: any) => {
                    return _.find(item.category, (category: any) => {
                        return category.name == this.activeCategory;
                    });
                });
            });
    }


}

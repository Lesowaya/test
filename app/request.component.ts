import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'simple-http',
    templateUrl: "app/request.component.html"
})

export class SimpleHTTPComponent {
    activeCategory: string;
    data: Object;
    loading: boolean;

    constructor(private http: Http) {
        this.makeRequest();
    }

    makeRequest(): void {
        this.loading = true;
        this.http.request('https://jsworkshop.000webhostapp.com/?model=category')
            .subscribe((res: Response) => {
                this.data = res.json();

                this.loading = false;
            });
    }

    openCategory(item: string): void{
        this.activeCategory = item;
    }
}
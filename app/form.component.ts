import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserService } from './data.service';

@Component({
    selector: 'forms',
    templateUrl: 'app/form.component.html',
    //providers: [UserService]
})
export class FormComponent {
    costMin: number;
    costMax: number;
    myForm: FormGroup;
    // name: AbstractControl;

    onKey(obj: any) {
        this.costMax = obj.costMax;
        this.costMin = obj.costMin;

        console.log(obj);
    }


    constructor( fb: FormBuilder
        , private userService: UserService
    ) {
        this.costMax = 200000;
        this.costMin = 0;
        this.userService.setCurrentUser("first");
        this.userService.setCurrentUser("second");
        this.userService.setCurrentUser("third");

    }

}

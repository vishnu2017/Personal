﻿import { Component} from '@angular/core'


@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls:['app/employee/employee.component.css']

})

export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'Tom';
    lastName: string = 'Wisnowski';
    gender: string = 'Male';
    age: number = 20;


    showDetails: boolean = false;
    toogleDetails(): void {

        this.showDetails = !this.showDetails;
    }

    

}
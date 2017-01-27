import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
/**
 7 * UserService manages our current user
 8 */
@Injectable()
 export class UserService {
     // // `currentUser` contains the current user
    currentUser: Subject<string> = new BehaviorSubject<string>(null);
     //
     public setCurrentUser(newUser: string): void {
         this.currentUser.next(newUser);
         console.log(this.currentUser);
         }
     }

 // export var userServiceInjectables: Array<any> = [
 //     UserService
 //     ];
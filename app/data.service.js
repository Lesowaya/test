"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
/**
 7 * UserService manages our current user
 8 */
var UserService = (function () {
    function UserService() {
        // // `currentUser` contains the current user
        this.currentUser = new BehaviorSubject_1.BehaviorSubject(null);
    }
    //
    UserService.prototype.setCurrentUser = function (newUser) {
        this.currentUser.next(newUser);
        console.log(this.currentUser);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
// export var userServiceInjectables: Array<any> = [
//     UserService
//     ]; 
//# sourceMappingURL=data.service.js.map
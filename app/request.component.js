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
var http_1 = require('@angular/http');
var SimpleHTTPComponent = (function () {
    function SimpleHTTPComponent(http) {
        this.http = http;
        this.makeRequest();
    }
    SimpleHTTPComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.request('https://jsworkshop.000webhostapp.com/?model=category')
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    SimpleHTTPComponent.prototype.openCategory = function (item) {
        this.activeCategory = item;
    };
    SimpleHTTPComponent = __decorate([
        core_1.Component({
            selector: 'simple-http',
            templateUrl: "app/request.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SimpleHTTPComponent);
    return SimpleHTTPComponent;
}());
exports.SimpleHTTPComponent = SimpleHTTPComponent;
//# sourceMappingURL=request.component.js.map
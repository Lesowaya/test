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
var _ = require('lodash');
var ItemComponent = (function () {
    function ItemComponent(http) {
        this.http = http;
    }
    ItemComponent.prototype.ngOnChanges = function (obj) {
        this.activeCategory = obj.activeCategory.currentValue;
        this.makeRequest();
    };
    ItemComponent.prototype.makeRequest = function () {
        var _this = this;
        this.http.request('https://jsworkshop.000webhostapp.com/?model=product')
            .subscribe(function (res) {
            _this.data = res.json().filter(function (item) {
                return _.find(item.category, function (category) {
                    return category.name == _this.activeCategory;
                });
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemComponent.prototype, "activeCategory", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'child',
            templateUrl: 'app/item.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map
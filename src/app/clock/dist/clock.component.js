"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClockComponent = void 0;
var core_1 = require("@angular/core");
var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
    }
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            var date = new Date();
            _this.updateClock(date);
        }, 1000);
    };
    ClockComponent.prototype.updateClock = function (date) {
        this.secHand.nativeElement.style.transform =
            "rotate(" + date.getSeconds() * 6 + "deg)";
        this.minHand.nativeElement.style.transform =
            "rotate(" + date.getMinutes() * 6 + "deg)";
        this.hrHand.nativeElement.style.transform =
            "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
    };
    __decorate([
        core_1.ViewChild("hrHand", { static: false })
    ], ClockComponent.prototype, "hrHand");
    __decorate([
        core_1.ViewChild("minHand", { static: false })
    ], ClockComponent.prototype, "minHand");
    __decorate([
        core_1.ViewChild("secHand", { static: false })
    ], ClockComponent.prototype, "secHand");
    ClockComponent = __decorate([
        core_1.Component({
            selector: "app-clock",
            templateUrl: "./clock.component.html",
            styleUrls: ["./clock.component.scss"]
        })
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;

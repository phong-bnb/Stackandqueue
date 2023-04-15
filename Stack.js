"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.pushData = function (data) {
        // @ts-ignore
        this.container.push(data);
    };
    Stack.prototype.readdata = function () {
        var t = this.container.length / 2;
        var arrnew = [];
        while (this.container.length > t) {
            arrnew.push(this.container.pop());
        }
    };
    return Stack;
}());
exports.Stack = Stack;

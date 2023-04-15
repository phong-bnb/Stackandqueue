"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.enqueue = function (data) {
        // @ts-ignore
        this.container.push(data);
    };
    Queue.prototype.readdata = function () {
        var n = this.container.length / 2;
        var arrnew1 = [];
        while (this.container.length > n) {
            arrnew1.push(this.container.shift());
        }
    };
    return Queue;
}());
exports.Queue = Queue;

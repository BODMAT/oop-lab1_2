"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shapes;
(function (Shapes) {
    class TCircle {
        _radius;
        constructor(radius) {
            if (radius && radius > 0) {
                this._radius = radius;
            }
            else {
                console.log("Встановлено радіус за замовченням");
                this._radius = 1;
            }
        }
        static copy(circle) {
            return new TCircle(circle._radius);
        }
        toString() {
            return `Круг з радіусом ${this._radius}`;
        }
        get radius() {
            return this._radius;
        }
        set radius(newRadius) {
            if (newRadius > 0) {
                this._radius = newRadius;
            }
            else {
                throw new Error("Радіус має бути більшим 0");
            }
        }
        getArea() {
            return Math.pow(this._radius, 2) * Math.PI;
        }
        getSector(deg) {
            if (deg < 0 || deg > 360) {
                throw new Error("Кут повинен бути в діапазоні між 0 та 360");
            }
            return deg / 360 * this.getArea();
        }
        getLength() {
            return 2 * Math.PI * this._radius;
        }
        compareCircle(secondCircle) {
            if (this._radius > secondCircle._radius) {
                return `${this.toString()} більший ніж ${secondCircle.toString()}`;
            }
            else if (this._radius === secondCircle._radius) {
                return `Круги однакові`;
            }
            else {
                return `${this.toString()} менший ніж ${secondCircle.toString()}`;
            }
        }
        // спосіб з методами замість перенавантаження операторів
        add(other) {
            if (typeof other === "number") {
                return new TCircle(this._radius + other);
            }
            else {
                return new TCircle(this._radius + other._radius);
            }
        }
        subtract(other) {
            if (typeof other === "number") {
                return new TCircle(Math.abs(this._radius - other));
            }
            else {
                return new TCircle(Math.abs(this._radius - other._radius));
            }
        }
        multiply(other) {
            if (typeof other === "number") {
                return new TCircle(this._radius * other);
            }
            else {
                return new TCircle(this._radius * other._radius);
            }
        }
    }
    class TCone extends TCircle {
        _height;
        constructor(radius, height) {
            super(radius);
            if (height && height > 0) {
                this._height = height;
            }
            else {
                console.log("Встановлюю висоту за замовчуванням");
                this._height = 1;
            }
        }
        static copy(conus) {
            return new TCone(conus._radius, conus._height);
        }
        toString() {
            return `Конус з радіусом ${this._radius} та вистотою ${this._height}`;
        }
        get height() {
            return this._height;
        }
        set height(newHeight) {
            if (newHeight > 0) {
                this._height = newHeight;
            }
            else {
                throw new Error("Висота має бути більшою за 0");
            }
        }
        getArea() {
            let baseArea = super.getArea();
            let apophema = Math.sqrt(Math.pow(this._radius, 2) + Math.pow(this._height, 2));
            let sideArea = Math.PI * this._radius * apophema;
            return baseArea + sideArea;
        }
        getAmount() {
            return 1 / 3 * Math.PI * this._radius * this._radius * this._height;
        }
        compareFigures(secondFigure) {
            const firstFigureArea = this.getArea();
            const secondFigureArea = secondFigure.getArea();
            if (firstFigureArea > secondFigureArea) {
                return `${this.toString()} більший ніж ${secondFigure.toString()}, за площею`;
            }
            else if (firstFigureArea === secondFigureArea) {
                return `Фігури однакові, за площею`;
            }
            else {
                return `${this.toString()} менший ніж ${secondFigure.toString()}, за площею`;
            }
        }
    }
    module.exports = { TCircle, TCone };
})(Shapes || (Shapes = {}));
//# sourceMappingURL=script.js.map
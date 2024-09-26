namespace Shapes {
    class TCircle {
        protected _radius: number;

        constructor(radius?: number) {
            if (radius && radius > 0) {
                this._radius = radius;
            } else {
                console.log("Встановлено радіус за замовченням");
                this._radius = 1;
            }
        }

        static copy(circle: TCircle): TCircle {
            return new TCircle(circle._radius);
        }

        public toString(): string {
            return `Круг з радіусом ${this._radius}`
        }

        public get radius(): number {
            return this._radius;
        }

        public set radius(newRadius: number) {
            if (newRadius > 0) {
                this._radius = newRadius;
            } else {
                throw new Error("Радіус має бути більшим 0");
            }
        }

        public getArea(): number {
            return Math.pow(this._radius, 2) * Math.PI;
        }

        public getSector(deg: number): number {
            if (deg < 0 || deg > 360) {
                throw new Error("Кут повинен бути в діапазоні між 0 та 360");
            }
            return deg / 360 * this.getArea();
        }

        public getLength(): number {
            return 2 * Math.PI * this._radius;
        }

        public compareCircle(secondCircle: TCircle): string {
            if (this._radius > secondCircle._radius) {
                return `${this.toString()} більший ніж ${secondCircle.toString()}`;
            } else if (this._radius === secondCircle._radius) {
                return `Круги однакові`
            } else {
                return `${this.toString()} менший ніж ${secondCircle.toString()}`;
            }
        }

        // спосіб з методами замість перенавантаження операторів
        add(other: TCircle | number): TCircle {
            if (typeof other === "number") {
                return new TCircle(this._radius + other);
            } else {
                return new TCircle(this._radius + other._radius);
            }
        }

        subtract(other: TCircle | number): TCircle {
            if (typeof other === "number") {
                return new TCircle(Math.abs(this._radius - other));
            } else {
                return new TCircle(Math.abs(this._radius - other._radius));
            }
        }

        multiply(other: TCircle | number): TCircle {
            if (typeof other === "number") {
                return new TCircle(this._radius * other);
            } else {
                return new TCircle(this._radius * other._radius);

            }
        }
    }

    class TCone extends TCircle {
        protected _height: number;
        constructor(radius?: number, height?: number) {
            super(radius);
            if (height && height > 0) {
                this._height = height;
            } else {
                console.log("Встановлюю висоту за замовчуванням");
                this._height = 1;
            }
        }

        static copy(conus: TCone): TCone {
            return new TCone(conus._radius, conus._height);
        }

        public toString(): string {
            return `Конус з радіусом ${this._radius} та вистотою ${this._height}`
        }

        public get height(): number {
            return this._height;
        }

        public set height(newHeight: number) {
            if (newHeight > 0) {
                this._height = newHeight;
            } else {
                throw new Error("Висота має бути більшою за 0");
            }
        }

        public getArea(): number {
            let baseArea = super.getArea();
            let apophema = Math.sqrt(Math.pow(this._radius, 2) + Math.pow(this._height, 2));
            let sideArea = Math.PI * this._radius * apophema;
            return baseArea + sideArea;
        }

        public getAmount(): number {
            return 1 / 3 * Math.PI * this._radius * this._radius * this._height;
        }

        public compareFigures(secondFigure: TCircle | TCone): string {
            const firstFigureArea = this.getArea();
            const secondFigureArea = secondFigure.getArea();

            if (firstFigureArea > secondFigureArea) {
                return `${this.toString()} більший ніж ${secondFigure.toString()}, за площею`;
            } else if (firstFigureArea === secondFigureArea) {
                return `Фігури однакові, за площею`
            } else {
                return `${this.toString()} менший ніж ${secondFigure.toString()}, за площею`;
            }
        }
    }

    module.exports = { TCircle, TCone };
}

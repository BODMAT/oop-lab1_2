//! JEST UNIT TESTS
const { TCircle, TCone } = require("./script")

describe("TCircle tests", () => {

    let _, _1, _2;
    beforeEach(() => {
        _ = new TCircle;
        _1 = new TCircle(10);
        _2 = new TCircle(-10);
    })

    test("Чи існують необхідні методи", () => {
        expect(_.toString).toBeDefined()
        expect(_.getArea).toBeDefined()
        expect(_.getSector).toBeDefined()
        expect(_.getLength).toBeDefined()
        expect(_.compareCircle).toBeDefined()
        expect(_.add).toBeDefined()
        expect(_.subtract).toBeDefined()
        expect(_.multiply).toBeDefined()
    })

    test("Set/get на пустому екземплярі", () => {
        expect(_.radius).toBe(1)
        expect(_.radius = 100).toBe(100)
    })

    test("Set/get на заповненому екземплярі", () => {
        expect(_1.radius).toBe(10)
        expect(_1.radius = 100).toBe(100)
    })

    test("Set/get на неправильному екземплярі", () => {
        expect(_2.radius).toBe(1)
        expect(_1.radius = 100).toBe(100)
    })

    test("copy перевірка", () => {
        expect(TCircle.copy(_1)).toEqual(_1)
        expect(TCircle.copy(_)).toEqual(_)
    })

    test("перевірка set на throw new Error", () => {
        expect(() => {
            _.radius = -20;
        }).toThrow(Error)
    })

    test("getArea перевірка", () => {
        expect(Math.round(_1.getArea())).toBe(314)
        expect((_.getArea()).toFixed(2)).toEqual("3.14")
    })

    test("getSector перевірка", () => {
        expect(_1.getSector(20).toFixed(2)).toBe("17.45")
        expect(_1.getSector(0)).toBe(0)
    })

    test("getLength перевірка", () => {
        expect(_1.getLength().toFixed(2)).toBe("62.83")
        expect(_.getLength().toFixed(2)).toBe("6.28")
    })

    test("compareCircle перевірка", () => {
        expect(_1.compareCircle(_)).toBe("Круг з радіусом 10 більший ніж Круг з радіусом 1")
        expect(_.compareCircle(_1)).toBe("Круг з радіусом 1 менший ніж Круг з радіусом 10")
    })
})

describe("TCone tests", () => {

    let _, _1, _2;
    beforeEach(() => {
        _ = new TCone;
        _1 = new TCone(10, 20);
        _2 = new TCone(-10, -20);
    })

    test("Чи існують необхідні методи", () => {
        expect(_.toString).toBeDefined();
        expect(_.getArea).toBeDefined();
        expect(_.getAmount).toBeDefined();
        expect(_.compareCircle).toBeDefined();
        expect(_.add).toBeDefined();
        expect(_.subtract).toBeDefined();
        expect(_.multiply).toBeDefined();
    })

    test("Set/get на пустому екземплярі", () => {
        expect(_.radius).toBe(1);
        expect(_.height).toBe(1);
        expect(_.radius = 100).toBe(100);
        expect(_.height = 200).toBe(200);
    })

    test("Set/get на заповненому екземплярі", () => {
        expect(_1.radius).toBe(10);
        expect(_1.height).toBe(20);
        expect(_1.radius = 100).toBe(100);
        expect(_1.height = 200).toBe(200);
    })

    test("Set/get на неправильному екземплярі", () => {
        expect(_2.radius).toBe(1);
        expect(_2.height).toBe(1);
    })

    test("copy перевірка", () => {
        expect(TCone.copy(_1)).toEqual(_1);
        expect(TCone.copy(_)).toEqual(_);
    })

    test("перевірка set на throw new Error", () => {
        expect(() => {
            _.radius = -20;
        }).toThrow(Error);
        expect(() => {
            _.height = -20;
        }).toThrow(Error);
    })

    test("getArea перевірка", () => {
        expect(Math.round(_1.getArea())).toBe(1017);
        expect((_.getArea()).toFixed(2)).toEqual("7.58");
    })

    test("getAmount перевірка", () => {
        expect(Math.round(_1.getAmount())).toBe(2094);
        expect((_.getAmount()).toFixed(2)).toEqual("1.05");
    })

    test("compareCircle перевірка", () => {
        expect(_1.compareCircle(_)).toBe("Конус з радіусом 10 та вистотою 20 більший ніж Конус з радіусом 1 та вистотою 1");
        expect(_.compareCircle(_1)).toBe("Конус з радіусом 1 та вистотою 1 менший ніж Конус з радіусом 10 та вистотою 20");
    })

})

describe("Compare figures (updated 26.09)", () => {
    const circle1 = new TCircle(10);
    const conus1 = new TCone(20, 10);

    test("comparing conus w circle", () => {
        expect(conus1.compareFigures(circle1)).toBe("Конус з радіусом 20 та вистотою 10 більший ніж Круг з радіусом 10, за площею")
        expect(conus1.compareFigures(conus1)).toBe("Фігури однакові, за площею")
    })
})

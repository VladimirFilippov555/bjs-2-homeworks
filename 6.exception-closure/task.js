function parseCount(number) {
    let parseNumber = Number.parseFloat(number);
    if (Number.isNaN(parseNumber)) {
        const error = new Error('Невалидное значение');
        throw error;
    }

    return parseNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }

}

class Triangle {
    constructor (a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area () {
        const p = (this.a + this.b + this.c) / 2;
        const sArea = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return Number(sArea.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        class Triangle { 
            get perimeter () { 
                return 'Ошибка! Треугольник не существует';
            }
            get area () { 
                return 'Ошибка! Треугольник не существует';
            }
        }
        return new Triangle;
    }
}
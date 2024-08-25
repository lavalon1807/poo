class Transport {
    constructor(mark, model, year) {
        this.mark = mark;
        this.model = model;
        this.year = year;
    }

    car() {
        console.log(
            'Марка машины: ' + this.mark,
            '\n' + 'Модель машины: ' + this.model,
            '\n' + 'Год машины: ' + this.year
        );
    };
}

class Car extends Transport {
    constructor(mark, model, year, door) {
        super(mark, model, year);
        this.door = door;
    }

    car() {
        super.car();
        console.log(
            'Дверей у машины: ' + this.door,
        );
    };
}

const car = new Car('Нива', 'Шивроле', 2001, 5);
car.car();
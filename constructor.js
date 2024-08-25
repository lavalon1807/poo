class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    howPlace() {
        let s = 0.5 * this.width * this.height;
        console.log(s);
        return;
    }

    howPerimetr() {
        let w = this.width + 2*(this.width / 2 + (this.height*2));
        console.log(w);
        return;
    }
}

const ending = new Rectangle(45, 79);
ending.howPlace();
ending.howPerimetr();
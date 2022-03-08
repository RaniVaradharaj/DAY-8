class Circle{
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
Circle(){
    // console.log(this.radius, this.color);
    return `${this.radius},${this.color}`;
    }
    Circle(radius) {
        this.radius = radius;
        return `${this.radius},${this.color}`;
    }
    Circle(radius,color) {
        this.radius = radius;
        this.color = color;
        return `${this.radius},${this.color}`;
    }
    getRadius() {
        return `${this.radius}`;
    }
    setRadius(radius=2) {
        this.radius = radius;
    }

    getColor() {
        return `${this.color}`;
    }
    setColor(color = "violet") {
        this.color = color;
    }
    toString(radius = this.radius) {
        this.radius = radius;
        return `As String ${this.radius}.toString()+${this.color}.toString()`;
    }
    getArea() {
        return `${3.14 * this.radius * this.radius}`;
    }
    getCircumference() {
        return `${2 * 3.14 * this.radius}`;
    }
}

let Object = new Circle(``)
Object.Circle()
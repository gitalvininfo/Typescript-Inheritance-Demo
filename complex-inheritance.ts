class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    moved(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.moved(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.moved(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
// let tom = new Horse("Tommy the Palomino");

sam.move();
// tom.move(34);


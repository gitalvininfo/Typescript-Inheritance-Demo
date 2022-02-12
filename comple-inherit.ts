class Animal {
    name: string;

    constructor(animalName: string) {
        this.name = animalName;
    }

    moved(distance: number) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}


class Dog extends Animal{
    constructor(name: string) {
        super(name);
    }

    move(distance = 3) {
        console.log('Dog moved');
        super.moved(distance);
    }
}

let d = new Dog("Doggy");

d.move();
class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
// ====================================

let greeters = new Greeter("world");

console.log(greeters.greet())
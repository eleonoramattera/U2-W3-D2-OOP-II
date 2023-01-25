class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  mostraEta(p1, p2, p3) {
    if (p1.age > p2.age && p1.age > p3.age) {
      return (
        p1.name +
        "" +
        "è più vecchio di" +
        "" +
        p2.name +
        "" +
        "e" +
        "" +
        p3.name
      );
    } else if (p2.age > p1.age && p2.age > p3.age) {
      return (
        p2.name +
        "" +
        "è più vecchio di" +
        "" +
        p1.name +
        "" +
        "e di" +
        "" +
        p3.age
      );
    } else {
      return (
        p3.name +
        "" +
        " è più giovane di" +
        "" +
        p1.name +
        "" +
        "e di" +
        p2.name
      );
    }
  }
}

let p1 = new Person("Mario", 11);
let p2 = new Person("Marco", 12);
let p3 = new Person("Marcello", 13);

console.log(p1.mostraEta());

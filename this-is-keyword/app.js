const person = {
  name: "talenta",
  walk() {
    console.log(this);
  }
};
person.walk();

const walk = person.walk();
console.log(walk);

var person = {
  name: "talent",
  walk() {},
  talk() {}
};
const target = "name";
person[target.value] = "talentaaa";
console.log(person.name);

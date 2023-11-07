// simple factory

class Todos extends Array {
  get(todo) {
    if (!this.includes(todo)) return console.log(todo + "not found");
    return this[this.indexOf(todo)];
  }
  add(todo) {
    if (!this.includes(todo)) return this.push(todo);
  }
  delete(todo) {
    if (!this.includes(todo)) return console.log(todo + "not found");
    return this.filter((todoItem) => todoItem !== todo);
  }
}

const todosArray = new Todos();
todosArray.add("shopping");
todosArray.add("work");
todosArray.add("football");
console.log(todosArray.get("work"));

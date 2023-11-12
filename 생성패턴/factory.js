// input 컴포넌트들을 각 패턴에 맞게 생성한다.

class Button {}
class Input {}
const TextInput = class extends Input {
  constructor() {
    super();
    console.log("create TextInput");
  }
};
const RadioInput = class extends Input {
  constructor() {
    super();
    console.log("create RadioInput");
  }
};
const SubmitInput = class extends Input {
  constructor() {
    super();
    console.log("create SubmitInput");
  }
};

// simple factory

class InputDerectory extends Array {
  get(element) {
    if (!this.includes(element)) return console.log("not found element");
    return new this[this.indexOf(element)]();
  }

  add(element) {
    if (element.__proto__ !== Input) return console.log("different type");
    if (!this.includes(element)) return this.push(element);
  }
}

const inputDerectory = new InputDerectory();

inputDerectory.add(TextInput);
inputDerectory.add(RadioInput);
inputDerectory.add(SubmitInput);
inputDerectory.add(Button);

console.log(inputDerectory.get(RadioInput));

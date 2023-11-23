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
const TextButton = class extends Button {
  constructor() {
    super();
    console.log("create TextButton");
  }
};
const RadioButton = class extends Button {
  constructor() {
    super();
    console.log("create RadioButton");
  }
};

// simple factory - 행위(함수)에 따른 다른 결과 값
// 객체의 생성 코드를 캡슐화 한다.

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

//absctract factory - 설정 값에 따라 그 설정에 따른 결과가 나옴

class UIFactory {
  getButton() {
    console.log("over");
  }
  getInput() {
    console.log("over");
  }
}

class RadioUIFactory extends UIFactory {
  getButton() {}
  getInput() {
    return inputDerectory.get(RadioInput);
  }
}

class TextUIFactory extends UIFactory {
  getButton() {}
  getInput() {
    return inputDerectory.get(TextInput);
  }
}

class Renderer {
  drawButton() {
    console.log(`draw complete ${this.factory.getButton()}`);
  }
  drawInput() {
    console.log(`draw complete ${this.factory.getInput()}`);
  }
  setFactory(UIfactory) {
    if (UIfactory.__proto__ !== UIFactory) return console.log("different type");
    this.factory = new UIfactory();
  }
}

const renderer = new Renderer();

renderer.setFactory(RadioUIFactory);
renderer.drawInput();

// factory method - 상속을 통해 '하위 클래스'에서 객체 생성 로직을 책임짐

class PaintingBox {
  paint() {
    const input = this._getInput();
    input.style = "border: 1px solid red";
    return input;
  }
}

class TextPaintingBox extends PaintingBox {
  _getInput() {
    return inputDerectory.get(TextInput);
  }
}

class SubmitPaintingBox extends PaintingBox {
  _getInput() {
    return inputDerectory.get(SubmitInput);
  }
}

console.log(new TextPaintingBox().paint());

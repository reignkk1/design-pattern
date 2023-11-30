// User를 만들어보자. User는 기본적으로 성별과 이름, 나이를 갖는다.

// 빌더 패턴을 쓰는 상황
//   - 객체에 여러 표현이 필요할때
//   - 전달할 인자가 너무 많은 경우.

class User {
  constructor(builder) {
    this.info = { ...builder };
  }
  consoleInfo() {
    console.log(this.info);
  }

  static get Builder() {
    return class {
      constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
      }
      addClothes(clothes) {
        this.clothes = clothes;
        return this;
      }
      addShoes(shoes) {
        this.shoes = shoes;
        return this;
      }
      addHat(hat) {
        this.hat = hat;
        return this;
      }
      build() {
        return Object.freeze(new User(this));
      }
    };
  }
}

const user1 = new User.Builder("KimMinGyeom", "Male", 25)
  .addClothes("Thom Browne")
  .addShoes("Gucci")
  .addHat("Prada")
  .build();

user1.info.hat = "1";
user1.consoleInfo();

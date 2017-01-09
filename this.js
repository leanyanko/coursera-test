function Person() {
  this.fullName = 'Anna';
  this.fav = 'java';

  this.describe = function () {
    console.log('this is ', this);
    console.log (this.fullName + " likes " + this.fav);
  };
}

var anna = new Person();
anna.describe();

var describe = anna.describe;
describe();
describe.call(anna);

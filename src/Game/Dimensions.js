class Dimensions {
  static description() {
    return {
      1: '10 × 10',
      2: '16 × 16',
      3: '25 × 25'
    }
  }
  static length() {
    return {
      1: 10,
      2: 16,
      3: 25
    }
  }
  static generateSet(gridLength) {
    let set = new Set();
    for (var i = 1; i <= gridLength * gridLength; i++) {
      set.add(i);
    }
    return set;
  }
  static set() {
    return {
      1: this.generateSet(this.length()[1]),
      2: this.generateSet(this.length()[2]),
      3: this.generateSet(this.length()[3])
    }
  }
  constructor() {
    this.description = Dimensions.description();
    this.length = Dimensions.length();
    this.set = Dimensions.set();
  }
}

const dimensions = new Dimensions();

export default dimensions;

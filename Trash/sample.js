var num = [20, 34, 34, 23, 23];

num = num.map(function (x) {
  return x * 2;
});
console.log("Double: ", num);

var newNum = num.filter(function (x) {
  return x > 50;
});
console.log("Filter: ", newNum);

var newNum = num.reduce(function (a, x) {
  return a + x;
});
console.log("Reduce: ", newNum);

var newNum = num.find(function (a) {
  return a < 50;
});
console.log("Find: ", newNum);

var newNum = num.findIndex(function (a) {
  return a < 50;
});
console.log("Findindex: ", newNum);

var newNum = num.map((n) => {
  return n * 2;
});
console.log(newNum);

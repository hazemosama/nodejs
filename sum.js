let total = 0;
let num;
for (let i = 0; i < process.argv.length; i++) {
  if (i == 0) {
    continue;
  }
  if (i == 1) {
    continue;
  }
  num = +process.argv[i];
  total += num;
}
console.log(typeof process.argv);
console.log(`last total = ${total}`);

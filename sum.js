function sum() {
  for (i = 2; i < process.argv.length; i++) {
    +process.argv[i] += [i];
  }
}

console.log(sum);


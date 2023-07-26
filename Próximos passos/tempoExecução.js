var end, start;
start = new Date();
console.time('1 tempo')
var inicio = performance.now()

for (var i = 0; i < 100_000_000; i++) {
    Math.sqrt(i);
    Math.tan(i);
}


end = new Date();
console.timeEnd('1 tempo')
var fim = performance.now()
console.log(`2 tempo ${fim - inicio} ms`);
console.log(`3 tempo ${end.getTime() - start.getTime()} msec`);
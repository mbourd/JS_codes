function avg(a,b,c) {
  const diff = b - a;
  console.log(diff);
  console.log(a + diff / 2);
  return c < (a + diff / 2) ? a : b;
}

console.log(avg(8, 13, 11.3));
console.log(avg(8, 10.8, 11.3));

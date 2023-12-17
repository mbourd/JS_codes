function avg(a,b,c) {
  const diff = b - a;
  console.log(diff);
  console.log(a + diff / 2);
  return c < (a + diff / 2) ? a : b;
}

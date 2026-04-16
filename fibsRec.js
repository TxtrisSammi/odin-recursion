function fibsRec(n) {
  console.log("This was printed recursively");
  
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const x = fibsRec(n - 1);
  
  x.push(x[x.length - 1] + x[x.length - 2]);
  
  return x;
}

console.log("Recursive (8):", fibsRec(8));

function decrement(length) {
  const generatedArry = Array.from({ length: length }, (x, i) => i + 1);

  for (let i = generatedArry.length; i > 0; i--) {
    let res = Array.from({ length: i }, (x, i) => i + 1);
    console.log(res.toString());
  }
}
decrement(20);
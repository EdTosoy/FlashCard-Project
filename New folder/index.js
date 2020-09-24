function decrementNumberArray(length) {
  const generatedArry = Array.from({ length }, (x, i) => i + 1);

  for (let i = generatedArry.length; i > 0; i--) {
    let currentArray = Array.from({ length: i }, (x, i) => i + 1);
    console.log(currentArray.toString());
  }
}
decrementNumberArray();

function getSecondLargest(inputArray) {
  const sortedArray = inputArray.sort((a, b) => b - a)
  console.log(sortedArray[1])
}
getSecondLargest()
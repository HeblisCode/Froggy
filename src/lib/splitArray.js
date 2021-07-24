/***********************************  EXAMPLE *****************************************

splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => OUTPUT [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

***************************************************************************************/

export default function splitArray(array, numOfParts) {
  const result = [];

  for (let subArrayIndex = 0; subArrayIndex < numOfParts; subArrayIndex++) {
    result.push(
      array.filter(
        (element, i) => i === subArrayIndex || i % numOfParts === subArrayIndex
      )
    );
  }

  return result;
}

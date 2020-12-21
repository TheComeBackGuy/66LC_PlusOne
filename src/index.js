import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>66 Plus One</h1>
<div>
LeetCode Problems  
</div>
`;

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  //function for the first number to != 0
  const aboveZero = (num) => num > 0;
  /***
 *  finds that number and returns it's index
  which will coincidently be the amount of zeros
  since the arrays start at zero
 */
  let zeroCount = digits.findIndex(aboveZero);
  //if the array can't find a num != 0...
  if (zeroCount === -1) {
    //...the array must be all zeros
    zeroCount = digits.length;
    // console.log(digits);
    // return theNumber;
    let theNumber = [1];

    for (let i = 0; i < zeroCount - 1; i++) {
      // console.log(i);
      theNumber.splice(0, 0, 0);
    }
    console.log(theNumber);
    return theNumber;
    //Otherwise...
  } else {
    console.log("there are " + zeroCount + " precfix zeros");
    //theNumber first joins each index to a string...
    //then converts that to an integer...
    //then adds 1 to the total of that integer

    // console.log(BigInt(digits.join("")));
    const theNumber = (Number(digits.join("")) + 1)
      //Then we convert back to a string...
      .toString()
      //split it back up..
      .split("")
      //then use map function to make everything an integer again.
      .map(Number);
    //if we found any leading zeros
    for (let i = 0; i < zeroCount; i++) {
      // console.log(i);
      theNumber.splice(0, 0, 0);
    }
    console.log(theNumber);
    return theNumber;
  }
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);

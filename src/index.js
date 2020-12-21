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
  let carryOver = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += carryOver;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
};

plusOne([9]);

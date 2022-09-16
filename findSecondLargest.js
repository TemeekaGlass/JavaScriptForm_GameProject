let givenArray = [ 6, 9 ,-23, 21, 76, 3, 45, 47, 63];
let testArray = [4, 2, 7, 9, 7, 8, 12, 63, 16, 1];

//Not my code - only for studying
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondlarge;
//for each element in array count up i that starts at the 2nd element to start comparison
    for (let i = 1; i < nums.length; ++i) {
// if element in i position of the num array is greater than the current held element in largest
      if (nums[i] > largest) {
//then second largest is assigned largest value and largest becomes the number in the current position of i
        secondlarge = largest;
          largest = nums[i];   
//if the number in the current position of i not assigned to largest and is greater than the value of second largest then that number
      } else if (nums[i] > secondlarge) {
      
//becomes second largest since it is greater then seconnd large
        secondlarge = nums[i];
      }
    }
    return secondlarge;
  }

  console.log(getSecondLargest(testArray));

  
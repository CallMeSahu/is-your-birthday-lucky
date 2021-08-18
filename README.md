# Is Your Birthday Lucky?
Web Based app made using VanillaJS. The app takes user's birthday and lucky number and lets them know if their birthday is lucky or not. 

## Working
1. The user has to input their birthday and lucky number and click on the check button. On clicking the check button checkBtnHandler function is called. 
1. The functions first checks if the both the input fields are filled or not. If any one of the fields are empty it alerts the user to fill the input. 
3. Now the date is taken, all dashes are removes and each number is stored in an array. After that all elements of the array are concatinated to form a number string.
4. After this the sum of all the numbers is calculated. If the sum is a multiple of the lucky number birthday is lucky is shown as result, else birthday is not lucky is shown as result.
5. On clicking the reset button, the output section gets hidden and the inputs are reset to blank. 
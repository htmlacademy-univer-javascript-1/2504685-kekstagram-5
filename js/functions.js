const checkStringLength = (inputString, maxLength) => {
  if (inputString.length <= maxLength) {
    return true;
  }
  else {
    return false;
  }
};

const checkPalindrome = (inputString) => {
  let string = inputString.replaceAll(' ', '');
  let newString = '';

  string = string.toLowerCase();
  for (let i = string.length - 1; i >= 0; i--){
    newString += string[i];
  }

  return string === newString;
};

const numbers = (input) => {
  let string = input.toString();
  let result = '';

  for (let char of string){
    if (!Number.isNaN(parseInt(char))){
      result += char;
    }
  }

  return result ? parseInt(result) : NaN;
};

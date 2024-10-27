const checkStringLength = (inputString, maxLength) => {
  if (inputString.length <= maxLength) {
    return true;
  } else {
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

const extractNumbers = (inputValue) => {
  let string;
  if (inputValue === 'number'){
    string = String(inputValue);
  } else{
    string = inputValue;
  }
  let result = '';

  for (const char of string){
    if (!Number.parseInt(char, 10)){
      result += char;
    }
  }

  return result ? Number(result) : NaN;
};

checkPalindrome();
checkStringLength();
extractNumbers();

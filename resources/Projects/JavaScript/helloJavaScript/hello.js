// Write function below
const subLength = (str, char) => {
  let charCount = 0;
  let letterFound = [];

  let stringArray = str.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === char){
      letterFound.push(i);
      charCount++;
      console.log(charCount);
    }
  }
  let result = stringArray.slice(letterFound[0], letterFound[1]).length + 1;
  if (charCount === 2)
    console.log(result);
  else
    console.log(0);
}

subLength('Saturday','a')




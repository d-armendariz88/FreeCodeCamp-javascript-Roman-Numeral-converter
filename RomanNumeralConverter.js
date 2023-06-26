function convertToRoman(num) {
  let str_array = num.toString().match(/[0-9]/g);
  console.log(str_array);
  let numeral = ''
  let length = str_array.length-1;
  for(var i = length; i>=0; i--){
    switch(length-i){
      case 0:
        console.log(0);
        console.log(parseInt(str_array[i]));
        numeral = convertUnit(parseInt(str_array[i]),'IX','I', 'V') + numeral;
        break;
      case 1:
        console.log(1);
        console.log(parseInt(str_array[i]));
        numeral =  convertUnit(parseInt(str_array[i]),'XC','X', 'L') + numeral;
        break;
      case 2:
        console.log(2);
        console.log(parseInt(str_array[i]));
        numeral =  convertUnit(parseInt(str_array[i]),'CM','C', 'D') + numeral
        break;
      case 3:
        console.log(3);
        console.log(parseInt(str_array[i]));
        numeral = convertUnit(parseInt(str_array[i]),'M','M', 'V') + numeral
        break;
    }
  }
  console.log(numeral)
 return numeral;
}

function convertUnit(num, nineValue, oneValue, fiveValue){
  var count = 0;
  var numeralString = ''
  if(num === 9){
    numeralString = nineValue;
  }
  else if (num >= 5 && num < 9){
    count = num-5;
    numeralString = fiveValue;
    while (count > 0){
      numeralString+= oneValue;
      count--;
    }
  }
  else if (num === 4){
    numeralString = oneValue + fiveValue;
  }
  else{
    count = num
    while (count > 0){
      numeralString+= oneValue;
      count--;
    }
  }

  return numeralString;
}

convertToRoman(36);
convertToRoman(99);
convertToRoman(891);
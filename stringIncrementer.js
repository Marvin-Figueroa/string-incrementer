function stringIncrementer(str) {
  if (!/[0-9]/.test(str[str.length - 1])) {
    return str + 1;
  }

  const digitsPart = getDigitsPortion(str);
  const lettersPart = str.slice(0, str.length - digitsPart.length);

  return (
    lettersPart +
    (Number(digitsPart) + 1).toString().padStart(digitsPart.length, 0)
  );
}

// It assumes that the digits are only at the end of the string
function getDigitsPortion(string) {
  for (let i = 0; i < string.length; i++) {
    if (/[0-9]/.test(string[i])) {
      return string.slice(i);
    }
  }
}
module.exports = { stringIncrementer, getDigitsPortion };

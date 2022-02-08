// TODO: write the validation functions
function isValidName(name) {
    return typeof name === "string" && name !== "" && nonWhiteSpaceOfAtLeast3Chars(name)

    function nonWhiteSpaceOfAtLeast3Chars(name) {
      return name.length >= 3 && name[0] !== " " && name[1] !== " " && name[2] !== " "
    }
}

function hoursAttended(attend, length) {
    return isStringOrNumber(attend) &&
          isStringOrNumber(length) &&
          canBeANumber(attend) &&
          canBeANumber(length) &&
          isZeroOrHigher(attend) &&
          isZeroOrHigher(length) &&
          isWholeNumber(attend) &&
          isWholeNumber(length) &&
          (Number(attend) <= Number(length))

    function isStringOrNumber(num) {
      return typeof num == "string" || typeof num == "number"
    }

    function canBeANumber(num) {
      return Number(num) !== NaN && num !== ""
    }

    function isZeroOrHigher(num) {
      return Number(num) >= 0
    }

    function isWholeNumber(num) {
      return Number(num) % 1 == 0
    }
  }


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);

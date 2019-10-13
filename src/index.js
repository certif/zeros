module.exports = function zeros(expression) {
  let doubleFac = [];
  let singleFac = [];

  let tempArr = expression.split("*");

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].includes('!!')) {
      doubleFac.push(parseInt(tempArr[i]));
    } else {
      singleFac.push(parseInt(tempArr[i]));
    }
  }

  function factorial(x) {
    if (x <= 1) return BigInt(1);
    return BigInt(x) * factorial(x - 1);
  };

  function dfactorial (x) {
    if (x==1) return BigInt(1);
    if (x==2) return BigInt(1);
    return BigInt(x) * dfactorial(x - 2);
  };

  singleFac = singleFac.map(factorial);
  doubleFac = doubleFac.map(dfactorial);

  tempArr = singleFac.concat(doubleFac);

  tempArr = tempArr.reduce(function(a, b) {
    return BigInt(a) * BigInt(b);
  });

  tempArr = String(tempArr);

  if (tempArr[tempArr.length - 1] === '0') {
    let zero = tempArr.match(/0+/g);
    return zero[zero.length - 1].length;
  } else {
    return 0;
  }
}

var numbers = [13, 99, 69, 73, 16, 97, 0, 42, 14, 27];

var strings = [
  'bsraq',
  'haysk',
  'vlnbb',
  'suxdq',
  'ljpgw',
  'ucwph',
  'jwieu',
  'wdovf',
  'ijapc',
  'jvixx'
];
var small = [4, 2, 3, 1];

var objects = [{
  'x': 3,
  'y': 'xpggm'
}, {
  'x': 4,
  'y': 'qlqip'
}, {
  'x': 6,
  'y': 'xvlrt'
}, {
  'x': 7,
  'y': 'fkdbd'
}, {
  'x': 0,
  'y': 'rfvvc'
}, {
  'x': 1,
  'y': 'scsfd'
}, {
  'x': 8,
  'y': 'wrcdm'
}, {
  'x': 5,
  'y': 'vuedf'
}, {
  'x': 2,
  'y': 'wtstr'
}, {
  'x': 9,
  'y': 'pnsgf'
}];

var paths = [{
  x: 5,
  y: 3
}, {
  x: 30,
  y: 0
}, {
  x: 10,
  y: 10
}, {
  x: 20,
  y: 0
}, {
  x: 3,
  y: 1
}, {
  x: 7,
  y: 22
}, {
  x: 6,
  y: 87
}, {
  x: -5,
  y: -5
}];


// Recursive function which is called when the condition of >1 is occured.
 // It recursively swaps the elements untill the condition of >1 fails or index 0 is reached.
function swapAll(list, i, j, func) {
  if (i < 0) {
    return true;
  } else if (func(list[i], list[j]) < 0) {
    return true;
  } else {
    swap(list, i, j);
    return swapAll(list, i - 1, j - 1, func);
  }
}



//Swap function- swaps 2 indices in the array as per the parameters.
function swap(list, startIndex, endIndex) {
  var temp = list[startIndex];
  list[startIndex] = list[endIndex];
  list[endIndex] = temp;
}

// Main sort function, has 2 parameters. comparefunction is optional in case of array of numbers or strings.
// If compare function is not given, the function sorts array in ascending order.
// If given, it sorts as per the compare function.
function sortIt(list, compareFunction) {

  if (compareFunction == undefined) {
    var compareFunction = "";
    if (list.every(function(element) {
        return typeof(element) === "string";
      })) {
      compareFunction = function(a, b) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        }
      }

    } else if (list.every(function(element) {
        return typeof(element) === "number";
      })) {
      compareFunction = function(a, b) {
        return a - b;
      }
    } else {
      return list;
    }
  }
  for (var i = 1; i < list.length;) {
    if (compareFunction(list[i - 1], list[i]) < 0) {
      i++;
      continue;
    } else {
      swapAll(list, i - 1, i, compareFunction);
    }
  }
  return list;
}




document.getElementById("resultArray").innerHTML = JSON.stringify(sortIt(numbers.slice(0)));
document.getElementById("resultString").innerHTML = JSON.stringify(sortIt(strings.slice(0)));
document.getElementById("resultObjx").innerHTML = JSON.stringify(sortIt(objects.slice(0), function(a, b){return a.x-b.x;}));
document.getElementById("resultObjy").innerHTML = JSON.stringify(sortIt(objects.slice(0), function(a, b){if(a.y>= b.y){return 1;} return -1;}));
document.getElementById("resultObj2x").innerHTML = JSON.stringify(sortIt(paths.slice(0), function(a, b){return a.x-b.x;}));
document.getElementById("resultObj2y").innerHTML = JSON.stringify(sortIt(paths.slice(0), function(a, b){return a.y-b.y;}));
document.getElementById("resultObj2dist").innerHTML = JSON.stringify(sortIt(paths.slice(0), function(a, b){return (((a.x*a.x)+(a.y*a.y))-((b.x*b.x)+b.y*b.y));}));


 ///Tests

 //Assert function- I am converting actual and expected outputs to string before comparing 
 // so that it can compare objects and arrays the same way. 
function assert(expected, actual) {
  if (expected.length !== actual.length) {
    throw new Error('Assertion Failed! Output lengths dont match')
  }
  if(expected !== actual){
    throw new Error("Assertion Failed");
  }

  // everything's OK!
  return true;
}

assert(JSON.stringify(numbers.sort()), JSON.stringify(sortIt(numbers.slice(0))));
assert(JSON.stringify(strings.sort()), JSON.stringify(sortIt(strings.slice(0))));
assert(JSON.stringify(objects.sort(function(a, b){return a.x-b.x;})), JSON.stringify(sortIt(objects, function(a, b){return a.x-b.x;})));
assert(JSON.stringify(objects.sort(function(a, b){if(a.y>= b.y){return 1;} return -1;})),JSON.stringify(sortIt(objects, function(a, b){if(a.y>= b.y){return 1;} return -1;})));
  
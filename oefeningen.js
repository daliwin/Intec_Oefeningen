console.log('---------Absolute waarde-----------')
console.log('')

//absolute waarde:
//  maak een functie die de absolute waarde van een getal teruggeeft.
//  (zonder gebruik te maken van Math.abs)
//  bvb:
//    abs(-1) ==> 1
//    abs(0) ==> 0
//    abs(1) ==> 1

function abs(nbr) {
	if (nbr < 0) {
		return nbr * -1
	} else {
		return nbr
	}
	
}

console.log(abs(-1))
console.log(abs(0))
console.log(abs(1))








console.log('')
console.log('---------Max-----------')
console.log('')

//
//max:
//  maak een functie die het grootste getal teruggeeft.
//  (zonder..)
//  bvb:
//    max(10, 20) ==> 20
//    max(0, 0) ==> 0
//    max(-50, 20) ==> 20

function max(nbr) {
	//console.log(nbr)
	var maxNbr = 0
	for (var i = 0; i < nbr.length; i++) {
			if(nbr[i] > maxNbr) {
				maxNbr = nbr[i]
				//console.log(maxNbr)
			}
	}
	//console.log(maxNbr)
	return maxNbr
}

nbr = [10, 20, 30, 85, 6]
max(nbr)
console.log(nbr + ' --> ' + max(nbr))











console.log('')
console.log('---------Driehoeksgetal---------')
console.log('')

//driehoeksgetal
//  maak een functie die een driehoeksgetal berekent.
//  doe dit met behulp van een for loop.
//  https://nl.wikipedia.org/wiki/Driehoeksgetal
//  bvb:
//    driehoek(6) ==> 6

function triangle(nbr) {
	nb = 0
	for (var i = 0; i < nbr; i++) {
		nb = i + (nb + 1)
	}
//	nbr = nbr * (nbr + 1) / 2
	return nb
}

console.log(triangle(2))
console.log(triangle(3))
console.log(triangle(6))









console.log('')
console.log('---------Langste woord---------')
console.log('')

//langste woord
//  Geef het langste woord in een lijst terug.
//  bvb:
//    longest([ "find", "the", "longest", "word" ]) ==> "longest"

function longestWord(words) {
	var word = ''
	for(var i = 0; i < words.length; i++) {
		if (words[i].length > word.length) {
			word = words[i]
		}
	}
	return word
}

words = ['test', 'test1234', 'test12', 'test123']
console.log(words + ' --> ' + longestWord(words))











console.log('')
console.log('---------Palindroom---------')
console.log('')

//palindroom
//  Ga na of een woord een palindroom is.
//  bvb:
//    palindroom('pap') ==> true
//    palindroom('neen') ==> true
//    palindroom('meetsysteem') ==> true
//    palindroom('mlsdvmlsn') ==> false

function palindroom(word) {
	var nb = word.length
	for (var i = 0; i < word.length; i++) {
		if (word[i] !== word[nb -1]) {
			return false
		}
		nb--
	}
	return true
}

console.log('pap ----------> ' + palindroom('pap'))
console.log('neen ---------> ' +palindroom('neen'))
console.log('meetsysteem --> ' + palindroom('meetsysteem'))
console.log('mlhjghjgeim --> ' + palindroom('mlhjghjgeim'))










console.log('')
console.log('---------camelCase---------')
console.log('')

//camelCase
//  bvb:
//    camelCase([ "create", "text", "node" ]) ==> createTextNode
//    camelCase([ "get", "element", "by", "id" ]) ==> getElementById

function camelCase(words) {
	var attached = words[0]
	for(var i = 1; i < words.length; i++) {
		var uppercaseFirstLetter = words[i].charAt(0).toUpperCase();
		var stringWithoutFirstLetter = words[i].slice(1)
		var word = uppercaseFirstLetter + stringWithoutFirstLetter
		attached = attached + word
	}
	return attached
}

camel = ['create', 'text', 'node', 'test']
console.log(camel + ' --> ' + camelCase(camel))









console.log('')
console.log('---------Factor---------')
console.log('')

function fac(n) {
	var res = n
	for(var i = 0; i <= n; i++) {
		res = res * (n - 1)
		n--
	}
	return res
}

console.log('3! = ' + fac(3)) // == 1 * 2 * 3 * 4 * 5
console.log('4! = ' + fac(4)) // == 1 * 2 * 3 * 4 * 5
console.log('5! = ' + fac(5)) // == 1 * 2 * 3 * 4 * 5
console.log('6! = ' + fac(6)) // == 1 * 2 * 3 * 4 * 5











console.log('')
console.log('---------Sum of odd numbers---------')
console.log('')

function sumOfOddNumbers(n) {
	sum = 0
	for(var i = 0; i < n; i++) {
		if (i % 2 !== 0) {
			sum = sum + i
		}
	}
	return sum
}

console.log(sumOfOddNumbers(10)) // ?? == 1 + 3 + 5 + 7 + 9










console.log('')
console.log('---------Max Array--------------')
console.log('')

function maxArray(a) {
 // returns the biggest number in the array
	var max = 0
	for (var i = 1; i < a.length; i++) {
		if (a[i] > max) {
			max = a[i]
		}
	}
	return max
}

var array = [1, 2, 33 , 4]
console.log('the biggest number from array: ' + array + ' is --> ' + maxArray(array))









console.log('')
console.log('---------Fibonacci--------------')
console.log('')


function fib(n) {
	var a, b, c
	a = 1
	b = 0
	c = 0
	
	while(n > 0) {
		c = a
		a = a + b
		b = c
		n--
	}
	return b
}

console.log('F0 = ' + fib(0))
console.log('F1 = ' + fib(1))
console.log('F2 = ' + fib(2))
console.log('F3 = ' + fib(3))
console.log('F4 = ' + fib(4))
console.log('F5 = ' + fib(5))
console.log('F6 = ' + fib(6))
console.log('F7 = ' + fib(7))
console.log('F8 = ' + fib(8))








console.log('')
console.log('---------Dambord--------------')
console.log('')


//maak een functie die een N*M dambord print (mbv console.log)
//print 0 voor zwarte vakken en 1 voor witte vakken.
//begin links vanboven met een 0
//
// bvb een 8*4 dambord:
//
//   0101010101
//   1010101010
//   0101010101
//   1010101010
//
// bvb een 2*3 dambord:
//
//   01
//   10
//   01
//
// etc...


function dambord(a, b) {
	var temp = 0
	var line = ''
	for (var i = 0; i < b; i++) {
		for (var x = 0; x < a; x++) {
			if(temp == 0) {
				line = line + '0'
				temp = 1
			} else {
				line = line + '1'
				temp = 0
			}
		}
		console.log(line)
		line = ''
	}
	return line
}

console.log(dambord(15, 9))











console.log('')
console.log('---------Fancy comment box--------------')
console.log('')

// maak een functie die een "fancy comment box" aanmaakt.
// bvb:

/******************************
* this is a fancy comment box *
******************************/

function fancy(n) {
	//var length = n.lenght + 2
	var line = ''
	for(var i = 0; i < n.length + 2; i++) {
		if(i == 0) {
			line = line + '/'
		} else {
			line = line + '*'
		}
	}
	
	line = line + '\n'
	line = line + '*' + n + '*'
	line = line + '\n'
	
	for(var x = 0; x <= n.length + 2; x++) {
		if (x == n.length + 1) {
			line = line + '/'
			break
		} else {
			line = line + '*'
		}
	}
	return line
}

console.log(fancy(' this is a test blabla '))










console.log('')
console.log('---------Sqrt--------------')
console.log('')


// !!! BONUS EXERCISE !!!

/*
Calculate the square root of n as follows:

  1 start with a guess
  2 if your guess is good enough, return your guess
  3 improve your guess
  4 repeat step 2
*/

function sqrt(n) {
	for(var guess = makeGuess(); !checkGuess(n, guess); guess = improveGuess(n, guess))
	
	return guess
}

// hints: define and use these functions:

function makeGuess(n) {
  // guess a square root for n (example: n/2)
	return n / 2
	
  // a guess is only a guess, not the answer
  // doesn't have to be correct just "close"
	
}

function checkGuess(n, guess) {
  // check if "guess" is a good enough guess
  // do this by checking the difference of "square of guess" and "n"
	
}

function improveGuess(n, guess) {
  // return an improved guess
  return (guess + n / guess) / 2
}

//console.log(sqrt(9))
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
console.log(max(nbr))











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
console.log(longestWord(words))











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

console.log(palindroom('pap'))
console.log(palindroom('neen'))
console.log(palindroom('meetsysteem'))
console.log(palindroom('mlhjghjgeim'))










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
console.log(camelCase(camel))









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

console.log(maxArray([1, 2, 33, 4])) // ==> 33









console.log('')
console.log('---------Fibonacci--------------')
console.log('')


function fib(n) {
	if (n < 0) {
		return -1
	} 
	
	if (n > 0 && n < 2) {
		return n
	}
		
	return (fib(n - 1) + fib(n - 2))
}

console.log(fib(4))
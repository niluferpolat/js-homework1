//asal sayılar
function isPrime(...numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] === 2) {
			console.log(numbers[i], " asal sayıdır");
		} else if (numbers[i] === 1) {
			console.log(numbers[i], " asal sayı değildir");
		} else {
			for (var j = 2; j <= numbers[i]; i++) {
				if (numbers[i] % j !== 0) {
					console.log(numbers[i], " asal sayıdır");
				} else {
					console.log(numbers[i], " asal sayı değildir");
				}
			}
		}
	}
}

//arkadaş sayılar
function divSum(n) {
	let result = 0;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			if (i == n / i) result += i;
			else result += i + n / i;
		}
	}
	return result + 1;
}
function areAmicable(x, y) {
	if (divSum(x) != y) {
		console.log("They are not amicable");
	} else if (divSum(y) == x) {
		console.log("They are amicable");
	}
}

//1000'e kadar olan asal sayılar
function primenumsto1000() {
	for (var counter = 2; counter <= 1000; counter++) {
		var notPrime = false;
		for (var i = 2; i <= counter; i++) {
			if (counter % i === 0 && i !== counter) {
				notPrime = true;
			}
		}
		if (notPrime === false) {
			console.log(counter);
		}
	}
}

//mükemmel sayılar
function perfectNumbersto1000() {
	for (var counter = 1; counter <= 1000; counter++) {
		let result = 0;
		for (var i = 1; i <= counter; i++) {
			if (counter % i === 0) {
				result = result + i;
			}
		}
		if (result === 2 * counter) {
			console.log(counter);
		}
	}
}

/*isPrime(16);
areAmicable(220, 284);
primenumsto1000();*/
perfectNumbersto1000();


const computeJoinPoint = (s1: number, s2: number) => {
	const getDigits = (num: number) => num.toString().split('').map(Number);

	let sequence1 = s1;
	let sequence2 = s2;

	const joinPointsS1: number[] = [sequence1];
	const joinPointsS2: number[] = [sequence2];

	let ret = 0;

	let shouldContinue = true;

	const dictionary = new Map();
	while (shouldContinue) {
		sequence1 = sequence1 + getDigits(sequence1).reduce((a, b) => a + b, 0);
		sequence2 = sequence2 + getDigits(sequence2).reduce((a, b) => a + b, 0);

		joinPointsS1.push(sequence1);
		joinPointsS2.push(sequence2);

		if (!dictionary.has(sequence1)) {
			dictionary.set(sequence1, 1);
		}

		if (dictionary.has(sequence2)) {
			ret = sequence2;
			shouldContinue = false;
		}
	}

	return ret;
};

export const convertStringToNumber = (string: string): number => {
	if (!string.length) return 0;

	const number = string
		.split('') // => ["A", "A"]
		.map((char) => char.charCodeAt(0)) // => [65, 65]
		.join(''); // => "6565"

	return +number;
};

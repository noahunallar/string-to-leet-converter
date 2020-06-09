"use strict";

const leet = {
	/**
	 * Map of conversions.
	 *
	 * @var object
	 */
	characterMap: { a: 4, e: 3, i: 1, o: 0, s: 5, t: 7, D: 5 },

	/**
	 * Checks if a given input is string or not.
	 *
	 * @param string string
	 * @return boolean
	 */
	isString: (string) => typeof string === "string" || string instanceof String,

	/**
	 * Converts a string to leet based on the character map.
	 *
	 * @param string string to convert
	 * @return string
	 */
	convert: (string) => {
		if (leet.isString(string)) {
			string = string || "";
			for (let letter in leet.characterMap) {
				if (
					leet.characterMap.hasOwnProperty(letter) ||
					leet.characterMap.hasOwnProperty(letter.toUpperCase())
				) {
					string = string.replace(
						new RegExp(letter, "g"),
						leet.characterMap[letter.toUpperCase()] || leet.characterMap[letter]
					);
				}
			}
			return string;
		} else {
			return "";
		}
	},
};

//Test
console.log(leet.convert("Let's have some fun."));
console.log(leet.convert("C is for cookie, that's good enough for me"));
console.log(leet.convert("By the power of Grayskull!"));
console.log(leet.convert(123123123123));

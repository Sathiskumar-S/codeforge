import assert from "assert";
import { Problem } from "../types/problem";

const starterBetweenNumber = `function betweennumber(n,l,r){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerBetweenNumber = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			3,8,15,45
		];

		const l = [2,9,11,23];
        const r = [6,343,56,43];
		const answers = [
			"Yes",
            "No",
            "Yes",
            "No"
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < n.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(n[i], l[i], r[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Between Number handler function error");
		throw new Error(error);
	}
};

export const betweennumber: Problem = {
	id: "between-number",
	title: "15. Between Number",
	problemStatement: `<p class='mt-3'>
    Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
  
</p>
<p class='mt-3'>
  You may assume that each input would have <strong>l value be less than r.</strong>
</p>`,
	examples: [
		{
			id: 1,
			inputText: "n = 3 , l = 2 ,r = 6",
			outputText: "Yes",
			explanation: "3 is between the number from 2 to 6.",
		},
        {
			id: 2,
			inputText: "n = 8 , l = 9 ,r = 343",
			outputText: "No",
			explanation: "8 is not between the number from 9 to 343.",
		},
		
		
	],
	constraints: `<li class='mt-2'>
  <code>l ≤ r</code>
</li> 
<li class='mt-2 text-sm'>
<strong>Output be in the format of yes or no.</strong>
</li>`,
	handlerFunction: handlerBetweenNumber,
	starterCode: starterBetweenNumber,
	order: 1,
	starterFunctionName: "function betweennumber(",
};

import assert from "assert";
import { Problem } from "../types/problem";

const starterComposite = `function composite(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerComposite = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			123,
            11,
            21,
            41
		];

		
		const answers = [
			"Yes",
            "No",
            "Yes",
            "No"

		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("twoSum handler function error");
		throw new Error(error);
	}
};

export const composite: Problem = {
	id: "composite",
	title: "13. Composite",
	problemStatement: `<p class='mt-3'>
    Given a number N, print 'yes' if it is composite else print 'no'


</p>`,
	examples: [
		{
			id: 1,
			inputText: "nums = 123",
			outputText: "Yes",
			explanation: "123 can be divided evenly by 1 and itself (123). Additionally, it can be divided by 3 and 41.",
		},
		{
			id: 2,
			inputText: "nums = 11",
			outputText: "No",
			explanation: "11 has exactly two distinct positive divisors (1 and 11), and it does not have any other divisors, it cannot be divided evenly by any other positive integer, 11 is not a composite number.",
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 ≤ num ≤ 1000</code>
<li class='mt-2 text-sm'>
<strong>Yes or No be printed.</strong>
</li>`,
	handlerFunction: handlerComposite,
	starterCode: starterComposite,
	order: 1,
	starterFunctionName: "function composite(",
};

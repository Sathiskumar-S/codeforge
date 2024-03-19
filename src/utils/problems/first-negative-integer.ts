import assert from "assert";
import { Problem } from "../types/problem";

const starterNegative= `function negative(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerNegative = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[1,2,2,-8],
            [3,-5,-6,9,7],
            [1,7,5,4]
		];

		
		const answers = [
			3,
            1,
            -1
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("first negative integer handler function error");
		throw new Error(error);
	}
};

export const negative: Problem = {
	id: "first-negative-integer",
	title: "11. First negative integer",
	problemStatement: `<p class='mt-3'>
    Given an array of integers, find the index of the first negative integer. If there are no negative integers, return -1.<br>
   
</p>
`,
	examples: [
		{
			id: 1,
			inputText: "nums= [1,2,2,-8]",
			outputText: "3",
			explanation: "Index of the first negative integer is 3.",
		},
		{
			id: 2,
			inputText: "nums =  [1,7,5,4]",
			outputText: "-1",
			explanation: "Negative integer is not found, return -1."
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= nums.length <= 10</code>
</li> 
<li class='mt-2 text-sm'>
<strong> The solution set maybe contain duplicate subsets.</strong>
</li>`,
	handlerFunction: handlerNegative,
	starterCode: starterNegative,
	order: 1,
	starterFunctionName: "function negative(",
};

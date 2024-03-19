import assert from "assert";
import { Problem } from "../types/problem";

const starterSubset= `function subset(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerSubset = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[1,2,2],
            [0]
		];

		
		const answers = [
			[[2],[1],[1,2,2],[2,2],[1,2],[]],
            [[0],[]],
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Subset handler function error");
		throw new Error(error);
	}
};

export const subset: Problem = {
	id: "subset",
	title: "9. subset",
	problemStatement: `<p class='mt-3'>
    Given an integer array nums that may contain duplicates, return all possible subsets (the power set).<br>
  <em>The solution set must not contain duplicate subsets. Return the solution in any order.</em> 
</p>
`,
	examples: [
		{
			id: 1,
			inputText: "nums= [1,2,2]",
			outputText: "[[2],[1],[1,2,2],[2,2],[1,2],[]]",
			explanation: "The solution set contains all possible subsets of the array [1,2,2].",
		},
		{
			id: 2,
			inputText: "nums =  [0]",
			outputText: "[[0],[]]",
			
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= nums.length <= 10</code>
</li> <li class='mt-2'>
<code>-10 <= nums[i] <= 10</code>
</li>
<li class='mt-2 text-sm'>
<strong> The solution set must not contain duplicate subsets.</strong>
</li>`,
	handlerFunction: handlerSubset,
	starterCode: starterSubset,
	order: 1,
	starterFunctionName: "function subset(",
};

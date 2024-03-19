import assert from "assert";
import { Problem } from "../types/problem";

const starterMinimumElement= `function minimumelement(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerMinimumElement = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[3,4,5,1,2],
            [4,5,6,7,0,1,2],
			[11,13,15,17]
		];

		
		const answers = [
			1,
			0,
			11
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("MinimumElement handler function error");
		throw new Error(error);
	}
};

export const minimumelement: Problem = {
	id: "minimum-element",
	title: "10. MinimumElement Without Sorting",
	problemStatement: `<p class='mt-3'>
	Pk finds it difficult to judge the minimum element in the list of elements given to him. Your task is to develop the algorithm in order to find the minimum element.<br>
  <em>Note:Don’t use sorting</em> <br>
     Input Description:
      You are given ‘n’ number of elements. Next line contains n space separated numbers.
</p>
`,
	examples: [
		{
			id: 1,
			inputText: "nums=[3,4,5,1,2]",
			outputText: "1",
			
		},
		{
			id: 2,
			inputText: "nums = [4,5,6,7,0,1,2]",
			outputText: "0",
			
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>n == nums.length</code>
</li> <li class='mt-2'>
<code>1 <= n <= 5000</code>
</li><li class='mt-2'>
<code>-5000 <= nums[i] <= 5000</code>
</li>
<li class='mt-2 text-sm'>
<strong> All the integers of nums are unique.</strong>
</li>
<li class='mt-2 text-sm'>
<strong>nums is sorted and rotated between 1 and n times.</strong>
</li>`,
	handlerFunction: handlerMinimumElement,
	starterCode: starterMinimumElement,
	order: 1,
	starterFunctionName: "function minimumelement(",
};

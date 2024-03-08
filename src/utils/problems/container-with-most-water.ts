import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeContainerwithmostwater = `function containerwithmostwater(height){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerContainerwithmostwater = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const height = [
			[1,8,6,2,5,4,8,3,7],
			[1,1],
			[4,3,2,1,4],
            [1,2,1]
		];

		
		const answers = [
			49,
			1,
			16,
            2,
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < height.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(height[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("containerwithmostwater handler function error");
		throw new Error(error);
	}
};

export const containerwithmostwater: Problem = {
	id: "container-with-most-water",
	title: "6. Container With Most Water",
	problemStatement: `<p class='mt-3'>
    Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at <code>(i, ai)</code> and  <code>(i, 0)</code>. 
  <em>Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.</em> 
</p>
<p class='mt-3'>
Notice that you may not slant the container.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "height = [1,8,6,2,5,4,8,3,7] ",
			outputText: "49",
			explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
		},
		{
			id: 2,
			inputText: "height =  [1,1] ",
			outputText: "1",
			
		},
		{
			id: 3,
			inputText: " height =[4,3,2,1,4]",
			outputText: "16",
		},
        {
			id: 3,
			inputText: " height =[1,2,1]",
			outputText: "2",
		},
	],
	constraints: `<li class='mt-2'>
  <code>n == height.length</code>
</li> <li class='mt-2'>
<code>2 <= n <= 10^5</code>
</li> <li class='mt-2'>
<code>0 <= height[i] <= 10^4</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
	handlerFunction: handlerContainerwithmostwater,
	starterCode: starterCodeContainerwithmostwater,
	order: 1,
	starterFunctionName: "function containerwithmostwater(",
};

import assert from "assert";
import { Problem } from "../types/problem";

const starterClassifyTriangle = `function classifyriangle(a,b,c){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerClassifyTriangle = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const a = [
			5,3,2
		];

		const b = [5,4,3];
        const c = [5,5,8];
		const answers = [
			"Equilateral","Scalene","Invalid"
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < a.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(a[i], b[i], c[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Between Number handler function error");
		throw new Error(error);
	}
};

export const classifytriangle: Problem = {
	id: "classiffy-triangle",
	title: "16. Classify Triangles By length",
	problemStatement: `<p class='mt-3'>
    Write a function classifyTriangle that takes three integers a, b, and c as parameters and returns a string representing the classification of the triangle. If the given lengths do not form a valid triangle (i.e., the sum of the lengths of any two sides is not greater than the length of the third side), return "Invalid".
</p>`,
	examples: [
		{
			id: 1,
			inputText: "a=5, b=5, c=5",
			outputText: "Equilateral",
			explanation: "All three sides are of equal length.",
		},
        {
			id: 2,
			inputText: "a=3, b=4, c=5",
			outputText: "Scalene",
			explanation: "No sides are of equal length.",
		},
        {
			id: 3,
			inputText: "a=2, b=3, c=8",
			outputText: "Invalid",
			explanation: "Length must be in certain range where be a difference in two.",
		},
		
		
	],
	constraints: `<li class='mt-2'>
  <code>l ≤ r</code>
</li> 
<li class='mt-2 text-sm'>
<strong>Output be in the format of yes or no.</strong>
</li>`,
	handlerFunction: handlerClassifyTriangle,
	starterCode: starterClassifyTriangle,
	order: 16,
	starterFunctionName: "function classifytriangle(",
};

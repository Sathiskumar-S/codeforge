import assert from "assert";
import { Problem } from "../types/problem";

const starterTriangle= `function triangle(h, w){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerTriangle = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const h = [
			2,
            5,
            7,
            9

		];

        const w = [
            4,
            4,
            3,
            7

        ];
        
		const answers = [
			4,
            10,
            10,
            31
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < h.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(h[i], w[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Area of Triangle handler function error");
		throw new Error(error);
	}
};

export const triangle: Problem = {
	id: "area-of-triangle",
	title: "12. Area of Triangle",
	problemStatement: `<p class='mt-3'>
    Given base(B) and height(H) of a triangle find its area.<br>
  <em>Input Size : N <= 1000000.</em> 
</p>
`,
	examples: [
		{
			id: 1,
			inputText: "h = 2, w = 4",
            outputText: "4",
            
        },
		{
			id: 2,
			inputText: "h = 5 , w = 4",
			outputText: "10",
			
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= nums.length <= 10</code>
</li> <li class='mt-2'>
<code>-10 <= nums[i] <= 10</code>
</li>
<li class='mt-2 text-sm'>
<strong> The solution must be in integer.</strong>
</li>`,
	handlerFunction: handlerTriangle,
	starterCode: starterTriangle,
	order: 12,
	starterFunctionName: "function triangle(",
};

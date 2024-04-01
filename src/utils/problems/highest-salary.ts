import assert from "assert";
import { Problem } from "../types/problem";

const starterHS = `function hs(n){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerHS = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			[50, 70, 60, 90, 100],
            [90,56,53,83,85],
            [87,45,97,48,32]
		];

		
		const answers = [
			50,53,32
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < n.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(n[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Highest Salary Difference handler function error");
		throw new Error(error);
	}
};

export const hs: Problem = {
	id: "highest-salary",
	title: "16. Highest Salaries Difference",
	problemStatement: `<p class='mt-3'>
    You are given an array of integers representing salaries of employees. Find the highest salary difference between any two employees.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "salaries = [50, 70, 60, 90, 100] ",
			outputText: "50",
			explanation: "Return an integer representing the highest salary difference between any two employees.",
		},
        {
			id: 2,
			inputText: "salaries = [90,56,53,83,85]",
			outputText: "53",
			
		},
        {
			id: 3,
			inputText: "salaries=[87,45,97,48,32]",
			outputText: "32",
			
		},
		
		
	],
	constraints: `<li class='mt-2'>
  <code>2≤len(salaries)≤10 </code>
</li> 
<li class='mt-2 text-sm'>
<strong>Output be in the format of yes or no.</strong>
</li>`,
	handlerFunction: handlerHS,
	starterCode: starterHS,
	order: 18,
	starterFunctionName: "function hs(",
};
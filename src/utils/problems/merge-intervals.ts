import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMergeIntervals = `function mergeintervals(nums,target){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerMergeIntervals = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const intervals = [
			[[1,3],[2,6],[8,10],[15,18]],
            [[1,4],[4,5]]
		];

		
		const answers = [
			[[1,6],[8,10],[15,18]],
            [[1,5]]
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < intervals.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(intervals[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Merge Intervals handler function error");
		throw new Error(error);
	}
};

export const mergeintervals: Problem = {
	id: "merge-intervals",
	title: "7. Merge Interval",
	problemStatement: `<p class='mt-3'>
    Given an array of intervals where intervals <code>[i]</code>= <code>[start_i, end_i]</code>,merge all overlapping intervals,
  <em>and return an array of the non-overlapping intervals that cover all the intervals in the input.</em> 
</p>
`,
	examples: [
		{
			id: 1,
			inputText: "intervals =[[1,3],[2,6],[8,10],[15,18]]",
			outputText: "[[1,6],[8,10],[15,18]]",
			explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
		},
		{
			id: 2,
			inputText: "intervals = [[1,4],[4,5]]",
			outputText: "[[1,5]]",
			explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= intervals.length <= 10^4 ≤ 10</code>
</li> <li class='mt-2'>
<code>intervals[i].length == 2≤ 10</code>
</li> <li class='mt-2'>
<code>0 <= start_i <= end_i <= 10^4</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
	handlerFunction: handlerMergeIntervals,
	starterCode: starterCodeMergeIntervals,
	order: 1,
	starterFunctionName: "function mergeintervals(",
};

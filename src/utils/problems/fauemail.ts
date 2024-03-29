import assert from "assert";
import { Problem } from "../types/problem";

const starterFAUemail = `function fauemails(n){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerFAUemail = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			[
				"alice@leetcode.com",
				"bob@leetcode.com",
				"charlie+test@leetcode.com",
				"david+hello@leetcode.com",
				"eve@leetcode.com",
				"frank@leetcode.com"
			],
			[
				"john.doe@example.com",
				"jane.doe@example.co.uk",
				"joe+spam@example.net"
			],
			[
				"test@example.com",
				"test2@example.com",
				"test3@example.com",
				"test+spam@example.com"
			]
		];

		
		const answers = [
			["leetcode.com"],
			["example.com", "example.co.uk", "example.net"],
			["example.com"]

		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < n.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(n[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Find all unique Email handler function error");
		throw new Error(error);
	}
};

export const fauemail: Problem = {
	id: "fauemail",
	title: "17. Find All Unique Email",
	problemStatement: `<p class='mt-3'>
    You are given a list of email addresses. Each email address consists of a local name and a domain name, separated by the "@" symbol. However, some email addresses might have periods (".") in the local name, which are ignored when sending emails. Additionally, if an email address has a plus ("+") symbol in the local name, everything after the plus symbol is also ignored.
	<strong>
	Your task is to write a function findUniqueDomains that takes a list of email addresses as input and returns a list of unique domain names.
	</strong>
</p>`,
	examples: [
		{
			id: 1,
			inputText: "n=alice@leetcode.com, bob@leetcode.com, charlie+test@leetcode.com, david+hello@leetcode.com, eve@leetcode.com, frank@leetcode.com",
			outputText: "leetcode.com",
			explanation: "leetcode.com be placed on all the mail id.",
		},
        {
			id: 2,
			inputText: "n=john.doe@example.com,jane.doe@example.co.uk,joe+spam@example.net",
			outputText: "example.com, example.co.uk, example.net",
			explanation: "The given mail id`s have a unique domains.",
		},
        {
			id: 3,
			inputText: "n=test@example.com, test2@example.com ,test3@example.com, test+spam@example.com",
			outputText: "example.com",
			
		},
		
		
	],
	constraints: `<li class='mt-2'>
  <code>i ≤ n</code>


</li>`,
	handlerFunction: handlerFAUemail,
	starterCode: starterFAUemail,
	order: 17,
	starterFunctionName: "function fauemail(",
};

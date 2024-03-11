import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMaximumDepthofbinarytree = `function maximumdepthofbinarytree(root){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerMaximumDepthofbinarytree = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const root = [
			[3,9,20,null,null,15,7],
			[1,null,2],
			[],
			[0]
		];

		
		const answers = [
			3,
			2,
			0,
			1
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < root.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(root[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Maximum depth of binary tree handler function error");
		throw new Error(error);
	}
};

export const maximumdepthofbinarytree: Problem = {
	id: "maximum-depth-of-binary-tree",
	title: "8. Maximum Depth of Binary Tree",
	problemStatement: `<p class='mt-3'>
    Given a binary tree, find its maximum depth.The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  <em>Note: A leaf is a node with no children.</em> 
</p>
`,
	examples: [
		{
			id: 1,
			inputText: "root =[3,9,20,null,null,15,7]",
			outputText: "3",
			explanation: "The maximum depth is 3.",
		},
		{
			id: 2,
			inputText: "root = [1,null,2]",
			outputText: "2",
			explanation: "The maximum depth is 2.",
		},
		{
			id: 3,
			inputText: "root = []",
			outputText: "0",
			explanation: "There is no root, so the maximum depth is 0.",
		},
		{
			id: 4,
			inputText: "root = [0]",
			outputText: "1",
			
		},
		
	],
	constraints: `<li class='mt-2'>
  <p class='mt-2'> The number of nodes in the tree is in the range [0, 104].</p>
</li> <li class='mt-2'>
<code>-100 <= Node.val <= 100</code>
</li>
<li class='mt-2 text-sm'>
<strong>This question can be solved using various approaches such as recursion, iterative BFS, or iterative DFS.</strong>
</li>`,
	handlerFunction: handlerMaximumDepthofbinarytree,
	starterCode: starterCodeMaximumDepthofbinarytree,
	order: 1,
	starterFunctionName: "function maximumdepthofbinarytree(",
};

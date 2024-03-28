import assert from "assert";
import { Problem } from "../types/problem";

const starterSDW= `function sdw(word,word1,word2){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerSDW = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const word = [
			 ["practice", "makes", "perfect", "coding", "makes"],
             ["makes", "coding", "makes", "perfect", "coding"],
             ["chocolate", "biscuits", "nuts", "fruits", "pizza"],
             ["skill", "knowledge", "learn", "success", "hardwork"]

		];

        const word1 = [
            "coding",
			"makes",
			"biscuits",
			"success"

        ];
		const word2 = [
			"practice",
			"makes",
			"nuts",
			"knowledge"
		];
        
		const answers = [
			3,
			0,
			1,
			2
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < word.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(word[i], word1[i], word2[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Shortest Word Distance handler function error");
		throw new Error(error);
	}
};

export const sdw: Problem = {
	id: "shortest-word-distance",
	title: "15. Shortest Word Distance",
	problemStatement: `<p class='mt-3'>
    Given a list of words words and two words word1 and word2, return the shortest distance between these two words in the list.<br>
  <em>You may assume that word1 does not equal word2, and word1 and word2 are both in the list.</em> 
</p>
`,
	examples: [
		{
			id: 0,
			inputText: "word = [practice, makes, perfect, coding, makes], word1 = coding, word2 = practice",
            outputText: "3",
			explanation: "Index value of coding to practice gives output of 3",
            
        },
		{
			id: 1,
			inputText: "word = [makes, coding, makes, perfect, coding], word1 = makes, word2 = makes",
			outputText: "0",
			explanation: "The word makes give has the same index as source as destination is 0"
			
		},
		{
			id:2,
			inputText: "word = [chocolate, biscuits, nuts, fruits, pizza], word1 = biscuits, word2 = nuts",
			outputText: "1",

		},
		{
			id: 3,
			inputText: "word = [skill, knowledge, learn, success, hardwork], word1 = success, word2 = knowledge",
			outputText: "2",
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>The number of words in words will be at least 2.</code>
</li> <li class='mt-2'>
<code>The length of each word in words will be between 1 and 100.</code>
</li>
<li class='mt-2 text-sm'>
<strong> word1 and word2 are distinct and are both present in words.</strong>
</li>`,
	handlerFunction: handlerSDW,
	starterCode: starterSDW,
	order: 1,
	starterFunctionName: "function sdw(",
};

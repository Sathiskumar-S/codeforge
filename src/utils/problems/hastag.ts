import assert from "assert";
import { Problem } from "../types/problem";

const starterTrendingHashtag = `function hastag(text, k){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerTrendingHashtag = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const text = [
			"Great day today! #sunny #happy #fun #sunny #fun #party" ,
            "Programming is #fun #fun #coding #coding #coding #programming #exciting #programming"
		];

		const k = [2 ,3];
        
		const answers = [
			["sunny", "fun"],
            ["coding", "fun", "programming"]
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < text.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(text[i], k[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Trending hashtag handler function error");
		throw new Error(error);
	}
};

export const hastag: Problem = {
	id: "hashtag",
	title: "19. Find Trending hashtag",
	problemStatement: `<p class='mt-3'>
    Write a function findTrendingHashtags(text: str, k: int) -> List[str] that takes in a string text and an integer k, and returns a list of the top k trending hashtags in descending order of frequency. If there are ties, return the hashtags in lexicographical order.
    <strong> You are given a string text containing a series of tweets. Each tweet may contain hashtags, which are words or phrases prefixed with the "#" symbol. Your task is to find the top k trending hashtags in the text. A hashtag is considered trending if it appears the most number of times in the text.</strong>
</p>`,
	examples: [
		{
			id: 1,
			inputText: "text = Great day today! #sunny #happy #fun #sunny #fun #party , k=2",
			outputText: "sunny, fun",
			explanation: "Top 2 trending hashtags been shown.",
		},
        {
			id: 2,
			inputText: "text = Programming is #fun #fun #coding #coding #coding #programming #exciting #programming , k=3",
			outputText: "#coding, #fun, #programming",
			explanation: "Top 3 Hashtag been showned",
		},
        
		
		
	],
    constraints: `<li class='mt-2'>
    <code> Text must contain # symbol </code>
    </li>`,
	
	handlerFunction: handlerTrendingHashtag,
	starterCode: starterTrendingHashtag,
	order: 19,
	starterFunctionName: "function hastag(",
};

import assert from "assert";
import { Problem } from "../types/problem";

const starterFridayPurchase = `function purchase(price, k){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerFridayPurchase = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const price = [
			[10,15,20,12,8,25,18],
            [8,18,15,10,20,12,25]
		];

		const k = [4,4];
        
		const answers = [
			"True" ,
            "False"
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < price.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(price[i], k[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Friday purchase handler function error");
		throw new Error(error);
	}
};

export const purchase: Problem = {
	id: "friday-purchase",
	title: "20. Friday Purchase",
	problemStatement: `<p class='mt-3'>
    Write a function canBuyOnFriday(prices: List[int], k: int) -> bool that takes in the array prices and an integer k, and returns True if you can buy the product on Friday, or False otherwise.
    <strong> You are given an array prices of integers, where prices[i] represents the price of a product on the i-th day. You want to buy the product on a Friday, which is the k-th day of the week (0-indexed). However, due to budget constraints, you can only buy the product if the price on Friday is less than or equal to the average price of the products from Monday to Friday (inclusive).</strong>
</p>`,
	examples: [
		{
			id: 1,
			inputText: "prices = [10,15,20,12,8,25,18] , k=4",
			outputText: "True",
			explanation: "The price on Friday (index 4) is 20, and the average price from Monday to Friday is (10 + 15 + 12 + 8 + 20) / 5 = 13. The price on Friday is less than the average, so you can buy the product on Friday.",
		},
        {
			id: 2,
			inputText: "prices = [8,18,15,10,20,12,25] , k=4",
			outputText: "False",
			explanation: "The price on Friday (index 4) is 20, and the average price from Monday to Friday is (12 + 8 + 15 + 10 + 20) / 5 = 13. The price on Friday is greater than the average, so you cannot buy the product on Friday.",
		},
        
		
		
	],
    constraints: `<li class='mt-2'>
    <code> </code>
    </li>`,
	
	handlerFunction: handlerFridayPurchase,
	starterCode: starterFridayPurchase,
	order: 20,
	starterFunctionName: "function purchase(",
};

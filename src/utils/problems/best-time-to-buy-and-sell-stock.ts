import assert from "assert";
import { Problem } from "../types/problem";

const starterBestTimeToBuyAndSellStock = `function besttimetobuyandsellstock(prices){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerBestTimeToBuyAndSellStock = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const prices = [
			[7,1,5,3,6,4],
			[7,6,4,3,1],
		];

		
		const answers = [
			5,
            0,
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < prices.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(prices[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("BestTimeToBuyAndSellStock handler function error");
		throw new Error(error);
	}
};

export const  besttimetobuyandsellstock: Problem = {
	id: "best-time-to-buy-and-sell-stocks",
	title: "9. Best Time to Buy and Sell Stocks",
	problemStatement: `<p class='mt-3'>
    You are given an array prices where prices[i] is the price of a given stock on the i-th day.<br> You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. 
  <em>Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.</em> 
</p>
<p class='mt-3'>

</p>`,
	examples: [
		{
			id: 1,
			inputText: "prices =   [7,1,5,3,6,4] ",
			outputText: "5",
			explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
		},
		{
			id: 2,
			inputText: "prices =   [7,6,4,3,1] ",
			outputText: "0",
            explanation: "In this case, no transaction is done, i.e., max profit = 0."
			
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= prices.length <= 10^5</code>
</li> <li class='mt-2'>
<code>0 <= prices[i] <= 10^4</code>

</li>`,
	handlerFunction: handlerBestTimeToBuyAndSellStock,
	starterCode: starterBestTimeToBuyAndSellStock,
	order: 1,
	starterFunctionName: "function besttimetobuyandsellstock(",
};

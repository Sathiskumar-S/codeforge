import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { containerwithmostwater } from "./container-with-most-water";
import { mergeintervals } from "./merge-intervals";
import {maximumdepthofbinarytree} from "./maximum-depth-of-binary-tree" ;

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
	"container-with-most-water": containerwithmostwater,
	"merge-intervals": mergeintervals,
	"maximum-depth-of-binary-tree": maximumdepthofbinarytree,
};

import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { containerwithmostwater } from "./container-with-most-water";
import { mergeintervals } from "./merge-intervals";
import {maximumdepthofbinarytree} from "./maximum-depth-of-binary-tree" ;
import {besttimetobuyandsellstock} from "./best-time-to-buy-and-sell-stock";
import { subset } from "./subsets";
import { minimumelement } from "./minimum-element";
import { negative } from "./first-negative-integer";
import { triangle } from "./area-of-triangle";
import { composite } from "./composite";
import { betweennumber } from "./between-number";

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
	"best-time-to-buy-and-sell-stocks": besttimetobuyandsellstock,
	"subsets": subset,
	"minimum-element": minimumelement,
	"first-negative-integer": negative,
	"area-of-triangle": triangle,
	"composite": composite,
	"between-number": betweennumber

};

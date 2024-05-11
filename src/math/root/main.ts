/*-----------------------------------------------------------------------------------------------
│                                       Root                                                    │
-----------------------------------------------------------------------------------------------*/

import type { int } from "../utils";

export function square_root(x: int): int {
	return x ** (1 / 2);
}

export function cube_root(x: int): int {
	return x ** (1 / 3);
}

export function root(x: int, n: int): int {
	return x ** (1 / n);
}

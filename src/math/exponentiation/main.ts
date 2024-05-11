/*-----------------------------------------------------------------------------------------------
│                                    Exponentiation                                             │
-----------------------------------------------------------------------------------------------*/
import type { int } from "../utils";


export function square(x: int): int {
  return x * x;
}

export function cube(x: int): int {
  return x * x * x;
}

export function power(x: int, n: int): int {
  return x ** n;
}

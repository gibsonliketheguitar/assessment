/**
(1/5) 
    Write a function in Typescript, which receives an integer number and has the next logic:
    a) it prints "candy" if number is divisible by 2;
    b) it prints "bar" if number is divisible by 11;
    c) it prints "candybar" if number is divisible by 22;
    d) it prints the value of number for all other cases;
    note: number is a positive integer number;

    //github help: https://stackoverflow.com/questions/21224922/is-there-a-way-to-represent-a-non-negative-integer-in-typescript-so-that-the-com for nonegative type
 */

type TCandy = number | string;
type NonNegativeInteger<T extends number> = number extends T
  ? never
  : `${T}` extends `-${string}` | `${string}.${string}`
  ? never
  : T;

function printCandy<N extends number>(data: NonNegativeInteger<N>): TCandy {
  let result: TCandy = data;
  if (data % 2 === 0) result = "candy";
  if (data % 11 === 0) result = "bar";
  if (data % 22 === 0) result = "candybar";
  return result;
}

//taken from https://gist.github.com/gre/1650294#gistcomment-1806616
export type EasingFunction = (t: number) => number;
export type EasingExponential = (p: number) => EasingFunction;


export * from "./easeIn";
export * from "./easeOut";
export * from "./easeInOut";



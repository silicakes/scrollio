import { EasingExponential, EasingFunction } from "./";
export const easeIn: EasingExponential = (power: number): EasingFunction => (t: number): number => t ** power;

export default easeIn;

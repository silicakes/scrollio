import { EasingExponential, EasingFunction } from "./";
import {easeIn} from "./easeIn";

export const easeOut: EasingExponential = (power: number): EasingFunction => 
(t: number): number => 1 - easeIn(power)(1 - t);

export default easeOut;

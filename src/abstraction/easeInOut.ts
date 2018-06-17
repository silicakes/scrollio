import { EasingExponential, EasingFunction } from "./";
import easeIn from "./easeIn";
import easeOut from "./easeOut";

export const easeInOut: EasingExponential = (power: number): EasingFunction => (t: number): number =>
  t < 0.5 ? easeIn(power)(t * 2) / 2 : easeOut(power)(t * 2 - 1) / 2 + 0.5;

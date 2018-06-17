import { easeIn, easeOut, easeInOut } from "../abstraction";
import { EasingFunction } from "../abstraction";
export type DefaultEasingFunction =
  | "linear"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint";

  export type EasingFunctionCollection = {
    [k in DefaultEasingFunction]: EasingFunction
  };
//taken from https://gist.github.com/gre/1650294#gistcomment-1806616
export const easingFunctions: EasingFunctionCollection = {
  linear: easeInOut(1),
  easeInQuad: easeIn(2),
  easeOutQuad: easeOut(2),
  easeInOutQuad: easeInOut(2),
  easeInCubic: easeIn(3),
  easeOutCubic: easeOut(3),
  easeInOutCubic: easeInOut(3),
  easeInQuart: easeIn(4),
  easeOutQuart: easeOut(4),
  easeInOutQuart: easeInOut(4),
  easeInQuint: easeIn(5),
  easeOutQuint: easeOut(5),
  easeInOutQuint: easeInOut(5)
};

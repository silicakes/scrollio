import { easingFunctions, DefaultEasingFunction } from "./implementation";
import { EasingFunction } from "./abstraction";
import { scrollTo } from "./scrollTo";

export interface Options {
  scrollElement: Element;
  easingFunction: DefaultEasingFunction | EasingFunction;
  duration: number;
}

export class Scrollio {
  private easingFunction: EasingFunction = easingFunctions["easeInOutQuad"];
  private scrollElement!: Element;
  private duration: number = 800;

  constructor(options: Options) {
    const { easingFunction, scrollElement, duration } = options;
    this.setScrollElement(scrollElement);
    this.setEasingFunction(easingFunction);
    this.setDuration(duration);
  }

  getEasingFunction = (): EasingFunction => this.easingFunction;
  setEasingFunction = (easingFunction: DefaultEasingFunction | EasingFunction): void => {
    this.easingFunction = typeof easingFunction === "string" ? easingFunctions[easingFunction] : easingFunction;
  };

  getScrollElement = (): Element => this.scrollElement;
  setScrollElement = (el: Element) => {
    this.scrollElement = el;
  };

  getDuration = () => this.duration;
  setDuration = (duration: number) => {
    this.duration = duration;
  };

  scrollTo = (to: number) => {
    return scrollTo(this.scrollElement, to, this.duration, this.easingFunction);
  };
}


import { EasingFunction } from "./abstraction";

//@ts-ignore
const root: any = typeof window !== "undefined" ? window : global;

const reqAnimationFramePolyfill = function(callback: () => void) {
  root.setTimeout(callback, 1000 / 60);
};

const requestAnimFrame = () =>
  root.requestAnimationFrame ||
  root.webkitRequestAnimationFrame ||
  root.mozRequestAnimationFrame ||
  reqAnimationFramePolyfill;

const move = (scrollElement: Element, amount: number) => {
  scrollElement.scrollTop = amount;
};

const position = (scrollElement: Element): number => scrollElement.scrollTop;

//@ts-ignore to avoid: https://github.com/Microsoft/vscode/issues/22436
export function scrollTo(scrollElement: Element, to: number, duration: number, easingFunction: EasingFunction) {
  let start = position(scrollElement),
    currentTime = 0,
    increment = 20;
  const reqAnimation = requestAnimFrame();
  return new Promise<void>(resolve => {
    let animateScroll = function() {
      currentTime += increment;
      let val = easingFunction(currentTime / duration) * (to - start) + start;
      console.log(val);
      move(scrollElement, val);
      if (currentTime < duration) {
        reqAnimation(animateScroll);
      } else {
        resolve();
      }
    };
    animateScroll();
  });
}

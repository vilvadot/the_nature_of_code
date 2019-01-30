import p5 from "p5";
import { Walker } from "./lib/Walker";

let walker 
global.p5 = p5;

const sketch = () => {

  setup = () => {
    createCanvas(1000,600)
    walker = new Walker()
    background(40)
  };
  
  draw = () => {
    walker.walk()
    walker.display()
  };
};

new p5(sketch);

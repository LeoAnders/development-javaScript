
"use strict"
console.log(this);
console.log(globalThis);

import { test } from './Mod1.js'

function fnExpression(){
  console.log("this dentro de function fnExpression");
  console.log(this);
}
fnExpression()

const fnArrow = ()  => {
  console.log("this dentro de arrow function");
  console.log(this);
}
fnArrow()
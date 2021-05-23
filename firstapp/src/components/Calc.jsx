import React from "react"


function add(a,b){
  return <li>sum of {a} and {b} is {a+b}</li>
}
function sub(a,b){
  return <li>sub of {a, b} is {a-b}</li>
}
function mult(a,b){
  return <li>mult of {a,b} is {a*b}</li>
}
function div(a,b){
  return <li>division of {a,b} is{a/b}</li>
}


export {add,sub,mult,div};
#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3){ //command line 에서 arg 수 3개 이하면 오류
    //process.argv 엔 기본적으로 node, main.js의 위치 가 들어간 두개의 문자열이 있음
    console.log("Insufficient parapmeter");
    process.exit(1);
}

let command = process.argv[2];
let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n)=> isNaN(n))){
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch(command){
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);

}

console.log(result);
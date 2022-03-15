// Your code here
function saturdayFun(fun = `roller-skate`) {
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function (work = `go to the office`){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(char = `*`) {
    const innerFunction = function(wish = `special`){
        return `You are ${char}${wish}${char}!`;
    }
    return innerFunction;
}

console.log(wrapAdjective(`$`)(`test`));
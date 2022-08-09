function receivesAFunction(callbackFunction){
    callbackFunction();
}

function returnsANamedFunction(){
    return function newFunction(){}
}

function returnsAnAnonymousFunction(){
    return (() => {})
}
// 1 - type guard

function sum (a: number | string, b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b));
    } else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.error("Invalid types");
    }
}

sum("15", "26");
sum(12, 35.5)
sum("20", 12)
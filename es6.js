var DriverCar = (car=>{

    if(car == "need"){
        console.log("petrol is needed")
    }
    else{
        console.log("not needed")
    }

})
DriverCar("need")


let [a,b] = [10,20]
console.log(a)
console.log(b)
let [c,d,...rest] = [10,20,30,40,50]
console.log(c)
console.log(d)
console.log(rest)
console.log(rest[1])

function *myGenerator(){
    console.log(1)
    let a = yield "first yeild";
    console.log(a)
    let b = yield "second yeild";
    console.log(b)
    return "hi"
}
let iterator = myGenerator();
let fy = iterator.next()
console.log(fy)
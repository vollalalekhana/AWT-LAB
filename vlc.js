function demo(){
    var a = 10
    let b = 20
    const c = 10
    console.log(a)
    console.log(b)
    console.log(c)
    if(true){
        var a = 20
        let b = 10
        const c = 20
    }
    console.log(a)
    console.log(b)
    console.log(c)
}
demo();
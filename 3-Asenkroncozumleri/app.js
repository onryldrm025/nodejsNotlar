const sayHello = () => {
    setTimeout(() => {
        console.log('Hello')
    }, 3000);
}
const sayGoodBye = () => {
    setTimeout(() => {
        console.log('GoodBye')
    }, 2000);
}
// please run --
// console.log(1---------------------)
sayHello()
sayGoodBye()
// Goodbye Hello
// 1--------------------end
// ----------

// way1 callback
//2-----------------------
const sayHello2 = (callback) => {
    setTimeout(() => {
        console.log('Hello')
        callback()
    }, 3000);
}
const sayGoodBye2 = () => {
    setTimeout(() => {
        console.log('GoodBye')
    }, 2000);
}

// sayHello2(sayGoodBye2)
// sayHello2(_ => sayGoodBye2())
//2----------------------end

// Promise
const sayHello3 = (callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello')
        }, 3000);
    })

}
const sayGoodBye3 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('GoodBye')
        }, 2000);
    })
}
sayHello3()
    .then((data) => {
        console.log(data)
        return sayGoodBye3()
    })
    .then((data) => {
        console.log(data)
    })
/////// async await 
async function smpleWay(){
    r1 = await sayHello3()
    console.log(r1)
    r2 = await sayGoodBye3()
    console.log(r2)
}

smpleWay()




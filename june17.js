// console.log("A")
// setTimeout(()=>{
//     console.log("B")
// },2000)
// setTimeout(()=>{
//     console.log("B")
// })
// console.log("C")
function example(){
    console.log("Hiii")
}
const example1= ()=>{
    console.log("Hello")
}

console.log("A")
setTimeout(example,2000)
setTimeout(example1,0)
console.log("C")

const promise =  new Promise((resolve,reject)=>{
    const success = true;
    if(success){
        console.log("Done")
    }
    else(
        console.log("Fail")
    )
})
promise.then((res)=>[console.log(res)])
.catch((err)=>[console.log(err)])
// function f1()
// {
//     console.log("hello: f1")
//     f2()
// }

// function f2(){
//     console.log("hello: f2")
// }

// setTimeout(f1,3000,"hello")

// function success() {
//     console.log("success")
// }

// function error() {
//     console.log("fail")
// }

// function exec (data, callback){
//     if(data){
//         console.log('balance: ${data}')
//     }
//     setTimeout(callback, 3000)
//     //callback()
// }

// function trigger(data){
//     if(data>0){
//         exec(data, success)
//     }
//     else if(data<=0){
//         exec(data,fail)
//     }
//     else{
//         exec(data,fail)
//     }
// }

// trigger(1)

async function API() {
      try{
        const response = await fetch('https://66e527315cc7f9b6273c6ea4.mockapi.io/user')
        const data = await response.json()
        console.table=(data)
        return data;
      }
      catch(error) {
        console.log(error)
      }  
}

API()
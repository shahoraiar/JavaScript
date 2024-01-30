console.log("welcome");

const promise1 = new Promise((resolve, reject)=>{
    let completedPromis = false ;
    if (completedPromis) {
        resolve('completed promise 1');
    }
    else{
        reject('not complete promise 1');
    }
});
// console.log(promise1);
// then use when resolve work
promise1.then((res) => {
    console.log(res);
});
// reject use for catch
promise1.catch((err) =>{
    console.log(err);
});
console.log('end');
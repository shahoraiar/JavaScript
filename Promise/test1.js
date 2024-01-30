const taskOne =() =>{
    return new Promise((resolve, reject) => {
        resolve('tesk 1 is completed');
    });
};
const taskTwo =() =>{
    return new Promise((resolve, reject) => {
        resolve('tesk 2 is completed')
    })
}
const taskThree =() =>{
    return new Promise((resolve, reject) => {
        resolve('tesk 3 is completed')
    })
}
const taskFour =() =>{
    return new Promise((resolve, reject) => {
        resolve('tesk 4 is completed')
    })
}

console.log('welcome');
taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res))
    .catch((err)=> console.log(err));
console.log('end');




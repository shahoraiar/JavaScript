const Button = document.querySelector('.save-btn')
// console.log(Button);
const Message = document.querySelector('.message');
// console.log(Message);

Button.addEventListener('click',startClock);

function startClock(){
    let date = new Date()

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    let Time = hours + ':' + minutes + ":" + seconds

    Message.textContent = Time;

    setInterval(startClock , 1000);
}

function formatTime(value){
    if(value<10){
        value = '0' + value ;
    }
    return value ;
}
var len = document.querySelectorAll('.mybutton').length ;
// console.log(len);

for(var i=0 ; i<=len ;i++){
    document.querySelectorAll('.mybutton')[i].addEventListener('click', function(){
        var text= this.innerHTML ;
        document.querySelector('h2').innerHTML = text + ' is clicked' ;
    });
}

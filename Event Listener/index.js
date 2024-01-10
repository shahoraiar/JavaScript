// var s = document.querySelector('h3').addEventListener('click', my_fun)

// function my_fun(){
//     document.write('hello');
// }

var my = document.querySelector('h3');

my.addEventListener('mouseover', function(){
    my.classList.add('my_list');
});

my.addEventListener('mouseout', function(){
    my.classList.remove('my_list');
});


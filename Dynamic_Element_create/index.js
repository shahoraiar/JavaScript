function welcomeMessage(){
var H1 = document.createElement('h1') ;
var text ;

var name = prompt("enter your name : ");
if(name==null || name==''){
    text = 'no name input';
}
else{
    text = 'welcome ' + name ;
}
var textNode = document.createTextNode(text);
// console.log(document);

H1.appendChild(textNode);
document.body.appendChild(H1);

document.write('<h2>This is inner H2 </h2> ')
};

welcomeMessage();

const socket = io('https://temprature-ui.herokuapp.com') ;
console.log("hello running")
// const socket = io('http://localhost:4000');

var txtInp =document.getElementById('inputBox');
var formContainer =document.getElementById('formContainer');
var output =document.getElementById('output')

socket.on('append-text',str=>{ 
    console.log(str);
    var div =document.createElement('div');
    div.innerText=str;
    output.append(div)
    // output.innerText=str;
})
// formContainer.addEventListener('submit' ,(e)=>{
//     // e.preventDefault(); 
//     // txtInp.value='';
//     setTimeout(() => {
//         txtInp.value='';
//     },100);
// })

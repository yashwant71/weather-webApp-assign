const socket = io('https://temprature-ui.herokuapp.com') ;
console.log("hello running")
// const socket = io('http://localhost:4000');

var txtInp =document.getElementById('inputBox');
var formContainer =document.getElementById('formContainer');
var output =document.getElementById('output')
var button =document.getElementById('submit')

socket.on('append-text',str=>{ 
    // console.log('append working')
    console.log(str);
    var div =document.createElement('div');
    div.innerText=str;
    output.append(div)
    // output.innerText=str;
})
button.addEventListener('click' ,(e)=>{
    e.preventDefault
    var str=txtInp.value;
    console.log(str);
    socket.emit("postCities",str)
})

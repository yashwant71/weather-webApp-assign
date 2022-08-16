require("dotenv").config()
const express = require('express')
const app = express()
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const params = {}
const axios = require('axios')

app.set('view engine', 'html'); //for app.render
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

//to server html file
app.get('/', (req, res) => {
    res.render(__dirname + '/index.html', params)
})

io.on('connection',socket=>{
    socket.on('postCities',str=>{
        // console.log(str);
        var arr = str.split(',')
        var obj = {
            "cities": arr
        }
        // res.render(__dirname + '/index.html', params)
        console.log(obj)
        axios.post('https://weather-temp-api.herokuapp.com/getWeather', obj)
            .then((res) => {
                // console.log(res.data);
                var obj2 = res.data;
                var mainobj = obj2["weather"]
                // res.send(mainobj);
                var strmainobj = JSON.stringify(mainobj)
                console.log(mainobj)
                socket.emit('append-text', strmainobj)
            }).catch((err) => {
                console.log("issue with api");
            });
    })
})


port = process.env.PORT || 4000
httpServer.listen(port)

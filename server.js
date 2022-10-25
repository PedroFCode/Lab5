//Imports express
const express = require('express')
const { get } = require('http')
const app = express()
const port = 3000
//middleware package
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Listens to request coming in to url on the get function
//Once the conditions are met plays the send function
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Rep!')
})

//gets the name parameter entered in the url
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

//sending json file 
app.get('/api/books', (req, res) => {
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
    res.json({books:books})
})

//__dirname gets the current directory
//gets the index.html file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//Uses the html file to get fname and lname and put the query in the url
app.get('/name', (req, res) => {
    console.log(req.query.lname);
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//Using post method instead of get
//Stops information from going to url
app.post('/name', (req, res)=>{
    console.log(req.body);
    res.send('Hello from POST ' + req.body.fname + ' ' + req.body.lname);
})

//Displays the port node is listening at
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
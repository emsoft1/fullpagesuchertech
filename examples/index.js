const express = require("express");
const app = express();
// app is an instance of express, which basically means it is a very big object with lots of properties

// middleware that ensures that we can read our request body easily, by getting the userinput and parsing it for us, therefore making it available to us
app.use(
    express.urlencoded({
        extended: false,
    })
);

// middleware that serves all of our static files
app.use(express.static(__dirname));

// creating our own middleware
app.use((req, res, next) => {
    console.log("middleware running");
    console.log("-----------");
    console.log(`ran ${req.method} at ${req.url} route`);
    console.log("at", Date.now());
    console.log("-----------");
    next();
});

// listen for a GET request on the '/' route
app.get("/", (req, res) => {
    // console.log('-----------');
    // console.log('ran GET / route');
    // console.log('-----------');
    // console.log("req.cookies", req.cookies);
    // res.send("<h1> Express makes my monday!!</h1>");
    res.sendFile(__dirname + "/examples/scroll-horizontally.html");
});

// listen for a GET request on /about and send a file as response
app.get("/about", (req, res) => {
    // console.log('-----------');
    // console.log('ran' + req.method + ' ' + req.url + 'route');
    // console.log('-----------');
    // res.sendFile takes in the path to the file we want to send as an argument

    // save sth in our cookie
    res.cookie("hasAccess", true);
    res.sendFile(__dirname + "/index.html");
});

// dynamic route
app.get("/about/:name", (req, res) => {
    // console.log('-----------');
    // console.log('ran' + req.method + ' ' + req.url + 'route');
    // console.log('-----------');

    console.log("req.params: ", req.params);
    res.send(
        `<h1>The word you entered after /about/ was:${req.params.name} </h1>`
    );
    // res.sendFile(__dirname + '/index.html');
});

app.get("/add-cute-animals", (req, res) => {
    // console.log('-----------');
    // console.log('ran' + req.method + ' ' + req.url + 'route');
    // console.log('-----------');
    res.send(`<form method='POST'>
        <input type='text' name='animal' placeholder='animal' autocomplete='off'>
        <input type='text' name='score' placeholder='score'>
        <button> submit </button>
    </form>`);
});

// handeling out POST request
app.post("/add-cute-animals", (req, res) => {
    // console.log('-----------');
    // console.log('ran' + req.method + ' ' + req.url + 'route');
    // console.log('-----------');
    console.log("req.body:", req.body);
    // req.body logs and object with properties animal & score, due to the name attributes used in the corresponding input tags
    res.send(
        `<h1>The animal you have typed was ${req.body.animal} and its cuteness score is ${req.body.score}</h1>`
    );
});

app.get("/super-secret-stuff", (req, res) => {
    // req.cookies { hasAccess: 'true' }
    if (req.cookies.hasAccess) {
        res.send(
            "<h1>Welcome you are allowed to read my super secret page full of secret stuff congrats!</h1>"
        );
    } else {
        res.redirect("/");
    }
});

app.listen(5500, () => {
    console.log("express server running!!");
});

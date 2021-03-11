const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);
// app is an instance of express, which basically means it is a very big object with lots of properties

// middleware that ensures that we can read our request body easily, by getting the userinput and parsing it for us, therefore making it available to us
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// );
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
    res.sendFile(__dirname + "/index.html");
});

// handeling out POST request
app.post("/email", (req, res) => {
    // console.log('-----------');
    // console.log('ran' + req.method + ' ' + req.url + 'route');
    // console.log('-----------');
    console.log("req.body:", req.body);
    // req.body logs and object with properties animal & score, due to the name attributes used in the corresponding input tags

    main();
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "sucher.tech",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "contact@sucher.tech", // generated ethereal user
                pass: "mehrdad123456", // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"medi" <contact@sucher.tech>', // sender address
            to: [
                "mehrdad@sucher.tech",
                "medi@sucher.tech",
                `${DOMPurify.sanitize(req.body.sender)}`,
            ], // list of receivers
            subject: "new contact", // Subject line
            text: "Hello world?", // plain text body
            html: `<p>${DOMPurify.sanitize(req.body.mas)}</p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.send("sent");
    }
});

app.listen(5500, () => {
    console.log("express server running!!");
});

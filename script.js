/*********************************************************************
** Program Name: Get/Post Request Checker
** Author: Andrew Helmsworth
** Date: 2020/05/16
** Description: Using Node, Express, and Handlebars to handle HTTP requests
** Sources: See Works Cited in footer.
*********************************************************************/

/*********************************************************************
** Application setup logic
** Parameters are: none
** What it does: Sets up Express, Handlebars, and body parser
** Returns: none
*********************************************************************/
//CITATION: See Ecampus Materials, Works Cited
var express = require("express");
var handlebars = require("express-handlebars").create({ defaultLayout: "main" });
var path = require('path');
//app.use('/static', express.static('public'));


var app = express();
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('views/images')); 
app.use(express.static('public'));


app.set("port", 25638);


/*********************************************************************
** POST route
** Parameters are: Trailing slash for root route, req/res function
** What it does: Displays a table to the user detailing their request params
** Returns: none
*********************************************************************/
app.post("/", function (req, res) {
    
});

/*********************************************************************
** GET route
** Parameters are: Trailing slash for root route, req/res function
** What it does: Displays a table to the user detailing their request params
** Returns: none
*********************************************************************/
app.get("/", function (req, res) {
    let context = {};
    res.render("get.handlebars", context);
});

/*********************************************************************
** Transmog page's route
** Parameters are: Path, req/res function
** What it does: Displays a transmog page
** Returns: none
*********************************************************************/
app.get("/transmog", function (req, res) {
    res.render("transmog");
});

/*********************************************************************
** Mounts page's route
** Parameters are: Path, req/res function
** What it does: Displays a mounts page
** Returns: none
*********************************************************************/
app.get("/mounts", function (req, res) {
    res.render("mounts");
});

/*********************************************************************
** Tanking page's route
** Parameters are: Path, req/res function
** What it does: Displays a tanking page
** Returns: none
*********************************************************************/
app.get("/tanking", function (req, res) {
    res.render("tanking");
});

/*********************************************************************
** 404 route
** Parameters are: req/res function
** What it does: Displays a 404 page
** Returns: none
*********************************************************************/
app.use(function (req, res) {
    res.status(404);
    res.render("404");
});

/*********************************************************************
** 500 route
** Parameters are: function with the error, request, response, and next
** What it does: Throws an Internal Server Error
** Returns: none
*********************************************************************/
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type("plain/text");
    res.status(500);
    res.render("500");
});

/*********************************************************************
** Call to listen on port
** Parameters are: Port, console.log function call
** What it does: Starts listening on specified port.
** Returns: none
*********************************************************************/
app.listen(app.get("port"), function () {
    console.log("Handlebars started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.");
});


/* WORKS CITED
Bootstrap Contributors. "Carousel." Bootstrap Documentation, https://getbootstrap.com/docs/4.0/components/carousel/.
Bootstrap Contributors. "Getting Started." Bootstrap Documentation, https://getbootstrap.com/docs/4.0/getting-started/introduction/.
Ecampus Materials. "Server Side with Node.js." EECS.oregonstate.edu, https://eecs.oregonstate.edu/ecampus-video/CS290/core-content/hello-node/hello-node.html.
Flambino <StackOverflow Username>. "How to create dictionary and add key–value pairs dynamically?" StackOverflow, https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically.
Language Guide. "Built-in helpers." Handlebars.js, https://handlebarsjs.com/guide/builtin-helpers.html#if.
Pasko, Slawomir. "How can I get the names of name-value pairs in Handlebars?" StackOverflow, https://stackoverflow.com/questions/20518179/how-can-i-get-the-names-of-name-value-pairs-in-handlebars.
sirthud <StackOverflow Username>. "req.body empty on posts" StackOverflow, https://stackoverflow.com/questions/24543847/req-body-empty-on-posts.
W3schools Contributors. Bootstrap 4 Tutorial. W3schools, https://www.w3schools.com/bootstrap4/.
W3schools Contributors. Bootstrap JS Carousel. W3schools, https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp.
*/
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//this is a hard-coded variable that stores a few cat image urls
var cats = ["https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1552933529-e359b2477252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"];

var randomCat = (function() {
    var randCat;
	randCat = cats[Math.floor(Math.random()*cats.length)];
    return randCat;
})(); 

//this is the function that selects a random url from the array defined above and displays it
// function getCat(){
// 	randomCat = cats[Math.floor(Math.random()*cats.length)];	
// };

// //this calls the function so the first image is displayed when the page loads
// getCat();

app.get("/", function(req,res){
	res.redirect("cats");
});

app.get("/cats", function(req,res){
	res.render("cats", {randomCat: randomCat});
});


app.listen(process.env.PORT || 3000, function(){
	console.log('Somewhere... The cat app has now started...');
});
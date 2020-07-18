var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

//this is a hard-coded variable that stores a few cat image urls
var cats = ["https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1552933529-e359b2477252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"]

//this is the function that selects a random url from the array defined above and displays it
// function getCat(){
//     var randomCat = cats[Math.floor(Math.random()*cats.length)];
//     document.getElementById("gato").innerHTML = `
//         <img class="card-img-top" src='${randomCat}'>
//         `;
// };

//this calls the function so the first image is displayed when the page loads
// getCat();

app.get("/", function(req,res){
	res.redirect("cats");
});


app.get("/cats", function(req,res){
	
	res.render("cats", {cats: cats});
})





app.listen(3000, function(){
	console.log('Server is now listening for cats on port 3000... and listening... and listening...');
});
const PORT = 3000;

// dependencies & setup
const express = require('express');
var exphbs = require("express-handlebars");
const apiRouter = require('./controllers/burgers_controller');
const app = express();

app.use(express.static("public"));

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// for serving all the normal html
// app.use( apiRouter );

// for routes
apiRouter(app);



app.listen(PORT, function() {
    console.log( `Serving on http://localhost:${PORT}` );
});
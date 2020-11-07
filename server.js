const PORT = 8080;

// dependencies & setup
const express = require('express');
var exphbs = require("express-handlebars");
const apiRouter = require('./controllers/burgers_controller');
const app = express();

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// for serving all the normal html

// for routes
apiRouter(app);

app.use( apiRouter );


app.listen(PORT, function() {
    console.log( `Serving on http://localhost:${PORT}` );
});
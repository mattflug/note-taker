const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//routes
const html = require("./routes/html");
const api = require("./routes/api");

app.use(express.urlencoded({ extended: true })); // req.body in your post routes -- undefined
app.use(express.json());
app.use(express.static("public"));
app.use(api);
app.use(html);

app.listen(PORT, function () {
  console.log(`Server running on ${PORT}`);
});

// prepping to complete exercise
const express = require("express");
const app = express();

//Import routes
const listeningRoutes= require("./routes/listing");

//route middlewear
app.use("/api/listings",listeningRoutes);

app.listen(4343)
{
    console.log("App listening to 4343");
}
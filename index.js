const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

const fs = require("fs");

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Listening at " + port);
});

app.get("/getData", (request, response) => {
    let fileData = fs.readFileSync("data.txt").toString();
    response.json({data: fileData});
});

app.post("/updateData", (request, response) => {
    fs.writeFileSync("data.txt", request.body.textInput);
    response.json({
        status: "success"
    });
});
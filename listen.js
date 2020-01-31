const server = require("./app.js");

let port = process.env.PORT;
if (port == null || port == "") {
  console.log("listening...");
  port = 8000;
}
server.listen(port);

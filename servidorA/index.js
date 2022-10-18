const express = require("express");
const port = process.env.PORT || 3000; 
const router = require("./router")
const app = express();

app.use(express.json());
app.use("/api", router);
app.get("/", (req, res)=> {res.json("opa maninho")})

app.listen(port, () => {console.log("rodando na porta", port)})
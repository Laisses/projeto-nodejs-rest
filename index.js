const express = require("express");

const app = express();

app.listen(1234, () => {
	console.log("servidor rodando! na porta 1234");
});
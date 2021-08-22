function cadastraURLsDeAtendimento(meuApp) {
	meuApp.get("/atendimentos", (req, res) => {
		res.send("Você está na URL de atendimentos");
	});
}

module.exports = 123;
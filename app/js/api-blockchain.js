const urlll = 'https://api.blockchain.info/stats';


const urll = 'https://blockchain.info/ticker';


const requisicao = fetch(urll, {
		mode: 'cors'
	})
	.then(Response => {
		return Response.json();
	})
	.then(jsonBody => {
		const formatado = jsonBody.USD.last.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
		document.getElementById("price").innerHTML = [formatado];
		console.log(jsonBody);
		console.log(formatado)
		console.log(jsonBody.USD.last);
	})


console.log(requisicao);

const requisicaodificuldade = fetch(urlll, {
		mode: 'cors'
	})
	.then(Response => {
		return Response.json();
	})
	.then(jsonBody => {
		const formatado = jsonBody.difficulty.toLocaleString('en-US');
		document.getElementById("difficulty").innerHTML = [formatado];
		const hashrate = jsonBody.hash_rate.toLocaleString('en-US');
		document.getElementById("hashrate").innerHTML = [hashrate];
		const Trade_volume_usd = jsonBody.trade_volume_usd.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
		document.getElementById("trade_volume_us").innerHTML = [Trade_volume_usd];
		console.log(Trade_volume_usd);
		console.log()
	})
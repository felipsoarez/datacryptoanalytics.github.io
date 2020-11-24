const itez = 'https://pay.itez.com/static/main/share/merchant.js?';


const requisica = fetch(itez, {mode: 'cors'})
    .then(Response => {
        return Response.json();
        console.log(requisica)
    })
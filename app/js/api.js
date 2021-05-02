
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.flipsidecrypto.com/api/v2/metrics/projects?api_key=d299fd8d-21c1-48ca-9325-861279e68a33")
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      appendData(data);
      console.log(data);
  })
  .catch(function (err) {
      console.log('error: ' + err);
  });
  
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].symbol;
      mainContainer.appendChild(div);
  }
}
  
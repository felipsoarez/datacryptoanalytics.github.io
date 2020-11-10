$(document).ready(function () {
  $("#divCarregando").show();
  $(window).load(function () {
      // Quando a página estiver totalmente carregada, remove o id
      $('#divCarregando').fadeOut('slow');
  });
});
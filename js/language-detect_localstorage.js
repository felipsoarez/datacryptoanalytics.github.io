/*
 Detects the browser language
 */
 var userLang = navigator.language || navigator.userLanguage;

 /*
  test if ou cookie is set
  */
 
 console.log();
 
 if(localStorage.getItem('lang')!=null){
   //   it is set, so no redirect
 }
 else{
   // The cookie is not set, so set it, and redirect
   langstring=userLang.split('-')[0];
   localStorage.setItem('lang',langstring);
   redirect(langstring);
 }
 
 /*
  redirects to the desired URLs
  Only the first two letters of the ISO country code are used
  */
  function redirect(actuallang){
    var url ='/';
    switch(actuallang){
      case 'en':
        url ='https://datacryptoanalytics.com/';
        break;
      case 'pt':
        url ='https://datacryptoanalytics.com/pt-BR/';
        break;
      case 'ru':
        url ='https://datacryptoanalytics.com/';
        break;
      case 'es':
        url ='https://datacryptoanalytics.com/pt-BR/';
        break;
      case 'de':
        url ='https://datacryptoanalytics.com/';
        break;
      default:
        url='https://datacryptoanalytics.com/';
        break;
    }
    window.location.replace(url);
  }
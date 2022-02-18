var cookiesAlerta = React.createClass({
    render: function() {
      return (
  
        <div className="alert alert-dark alert-dismissible fade show sombra-black" role="alert">
          <center><i className="fas fa-cookie-bite" /> Cookies  <a href="https://datacryptoanalytics.com/privacy-policy"> Política de Privacidade</a>
          </center>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      );
    }
  });

var Navbar = ReactDOM.createClass({
  render: function() {
    return (

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          {/* navbar brand or logo */}
          <a href="#" className="navbar-brand">
            <img src="images/logo-white-datacrypto.png" width={122} height={53} />
          </a>
          <div className="tradutor">
            {/* GTranslate: https://gtranslate.io/ */}
            <a href="#" onclick="doGTranslate('en|pt');return false;" title="English" className="gflag nturl" style={{backgroundPosition: '-0px -0px'}}> 
            </a><a href="#" onclick="doGTranslate('pt|en');return false;" title="Translate" className="gflag nturl">
              <img src="app/images/google-translate-orange.png" height={26} width={26} alt="English" />
            </a>
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                     <!--\n                        a.gflag {vertical-align:middle;font-size:24px;padding:1px 0;background-repeat:no-repeat;background-image:url( );}\n                        a.gflag img {border:0;}\n                        a.gflag:hover {background-image:url( );}\n                        #goog-gt-tt {display:none !important;}\n                        .goog-te-banner-frame {display:none !important;}\n                        .goog-te-menu-value:hover {text-decoration:none !important;}\n                        body {top:0 !important;}\n                        #google_translate_element2 {display:none!important;}\n                        -->\n                  " }} />
            <div id="google_translate_element2" />
          </div>
          {/* end navbar brand or logo */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarTogglerDemo" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="https://datacryptoanalytics.com/membership" className="nav-link" target="_blank">
                  <i className="fas fa-user-tie" />
                  <sup className="pulse red">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={16} height={16} viewBox="0 0 172 172" style={{fill: '#fa314a'}}>
                      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                        <path d="M0,172v-172h172v172z" fill="none" />
                        <g fill="#27ff09">
                          <path d="M86,43c-23.74824,0 -43,19.25176 -43,43c0,23.74824 19.25176,43 43,43c23.74824,0 43,-19.25176 43,-43c0,-23.74824 -19.25176,-43 -43,-43z" />
                        </g>
                      </g>
                    </svg>
                  </sup>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://datacryptoanalytics.com/app/indicadores " className="nav-link" target="_blank">
                  <i className="fas fa-chart-line" />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://dc-analytics.gitbook.io/docs/" className="nav-link" target="_blank">
                  <i className="fas fa-external-link-alt" />
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a href="https://datacrypto-analytics.evermart.com.br/" className="nav-link" target="_blank">
                  <i className="fas fa-sign-in-alt" />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://br.tradingview.com/u/DataCryptoAnalytics/" className="nav-link imsombra" target="_blank">
                  <svg width={36} height={28} viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z" fill="currentColor" />
                    <circle cx={20} cy={8} r={4} fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});



var intro = React.createElement({
    render: function() {
      return (
  
        <div id="home" className="home-intro segments">
          <div className="container">
            <div className="section-title">
              <h2><b> Indicadores &amp;  <b style={{color: '#ff8c05'}}>Softwares</b> para <b style={{color: '#ff8c05'}}>Trading</b></b> </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="container">
                  <h5> </h5>
                  <span className="actions">
                    <ul>
                      <li>
                        <a href="https://twitter.com/dc_analytics">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/dc_analytics/">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://dc-analytics.medium.com/">
                          <i className="fab fa-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCxfGBCV9E04Uw4flJLjBCqg">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="https://t.me/dc_analytics">
                          <i className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/datacrypto-analytics">
                          <i className="fab fa-github" />
                        </a>
                      </li>
                      <li>
                        <a href="https://pypi.org/project/crypto-analysis-cli/">
                          <i className="fab fa-python" />
                        </a>
                      </li>
                    </ul>
                  </span>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <h2>
                        Produtos &amp; Serviços 
                      </h2>
                    </button>
                    <div className="dropdown-content">
                      <a href="https://datacryptoanalytics.com/">
                        <h4><i className="fas fa-arrow-alt-circle-left" /></h4>
                      </a>
                      <a href="https://datacryptoanalytics.com/app" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Web App</b> 
                        <sup className="pulse red ">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={16} height={16} viewBox="0 0 172 172" style={{fill: '#fa314a'}}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                              <path d="M0,172v-172h172v172z" fill="none" />
                              <g fill="#27ff09">
                                <path d="M86,43c-23.74824,0 -43,19.25176 -43,43c0,23.74824 19.25176,43 43,43c23.74824,0 43,-19.25176 43,-43c0,-23.74824 -19.25176,-43 -43,-43z" />
                              </g>
                            </g>
                          </svg>
                        </sup>
                      </a>
                      <a href="https://datacryptoanalytics.com/indicadores" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Indicadores</b>
                      </a>
                      <a href="https://br.tradingview.com/u/DataCryptoAnalytics/" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>TradingView</b>
                      </a>
                      <a href="https://dc-analytics.gitbook.io/docs/" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Documentação</b>
                      </a>
                      <a href="https://datacryptoanalytics.com/ebook" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>E-Book</b>
                      </a>
                      <a href="https://github.com/datacrypto-analytics/cryptodash" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>CryptoDash</b>
                      </a>
                      <a href="https://github.com/datacrypto-analytics/quant-analysis-cli" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>quant-analysis-cli</b>
                        <sup>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={13} height={13} viewBox="0 0 172 172" style={{fill: '#000000'}}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                              <path d="M0,172v-172h172v172z" fill="none" />
                              <g fill="#e51a05">
                                <path d="M74.53333,11.46667c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c0,28.99347 -40.13333,51.6 -40.13333,91.73333c0,30.48893 33.04404,50.20072 44.67969,51.47683c0.3903,0.08224 0.78811,0.12352 1.18698,0.12317c3.16643,0 5.73333,-2.5669 5.73333,-5.73333c-0.00087,-1.72476 -0.77817,-3.35749 -2.11641,-4.44558c0,-0.00373 0,-0.00746 0,-0.0112c-5.21733,-4.2312 -15.08359,-16.50617 -15.08359,-27.71484c0,-18.39827 17.2,-25.16172 17.2,-25.16172c-9.80973,27.74933 22.33384,31.10217 28.80104,58.5763h0.0112c0.58189,2.62021 2.90371,4.48605 5.58776,4.49036c1.20741,-0.00294 2.38307,-0.38699 3.35938,-1.09739c0.10337,-0.075 0.20421,-0.15343 0.30234,-0.23516c0.93308,-0.60597 25.00495,-16.52664 25.00495,-50.26745c0,-13.775 -6.88956,-37.43579 -11.84739,-47.91589c-0.00409,-0.00866 -0.00711,-0.02496 -0.0112,-0.03359c-0.00372,-0.00747 -0.00745,-0.01494 -0.0112,-0.0224c-0.86395,-2.18853 -2.97733,-3.62704 -5.33021,-3.62812c-2.76275,0.00261 -5.13073,1.97514 -5.63255,4.69192c-0.00001,0.00747 -0.00001,0.01493 0,0.0224c-0.01401,0.06266 -2.64738,11.75767 -11.56745,18.21901c0,-27.01337 -19.50272,-54.91608 -29.78646,-66.45964c-0.15433,-0.20902 -0.32269,-0.40731 -0.50391,-0.59349c-1.0775,-1.11376 -2.55997,-1.74391 -4.10964,-1.74687z" />
                              </g>
                            </g>
                          </svg>
                        </sup>
                      </a>
                      <a href="https://pypi.org/project/crypto-analysis-cli/" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>crypto-analysis-cli</b>
                        <sup>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={13} height={13} viewBox="0 0 172 172" style={{fill: '#000000'}}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                              <path d="M0,172v-172h172v172z" fill="none" />
                              <g fill="#e51a05">
                                <path d="M74.53333,11.46667c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c0,28.99347 -40.13333,51.6 -40.13333,91.73333c0,30.48893 33.04404,50.20072 44.67969,51.47683c0.3903,0.08224 0.78811,0.12352 1.18698,0.12317c3.16643,0 5.73333,-2.5669 5.73333,-5.73333c-0.00087,-1.72476 -0.77817,-3.35749 -2.11641,-4.44558c0,-0.00373 0,-0.00746 0,-0.0112c-5.21733,-4.2312 -15.08359,-16.50617 -15.08359,-27.71484c0,-18.39827 17.2,-25.16172 17.2,-25.16172c-9.80973,27.74933 22.33384,31.10217 28.80104,58.5763h0.0112c0.58189,2.62021 2.90371,4.48605 5.58776,4.49036c1.20741,-0.00294 2.38307,-0.38699 3.35938,-1.09739c0.10337,-0.075 0.20421,-0.15343 0.30234,-0.23516c0.93308,-0.60597 25.00495,-16.52664 25.00495,-50.26745c0,-13.775 -6.88956,-37.43579 -11.84739,-47.91589c-0.00409,-0.00866 -0.00711,-0.02496 -0.0112,-0.03359c-0.00372,-0.00747 -0.00745,-0.01494 -0.0112,-0.0224c-0.86395,-2.18853 -2.97733,-3.62704 -5.33021,-3.62812c-2.76275,0.00261 -5.13073,1.97514 -5.63255,4.69192c-0.00001,0.00747 -0.00001,0.01493 0,0.0224c-0.01401,0.06266 -2.64738,11.75767 -11.56745,18.21901c0,-27.01337 -19.50272,-54.91608 -29.78646,-66.45964c-0.15433,-0.20902 -0.32269,-0.40731 -0.50391,-0.59349c-1.0775,-1.11376 -2.55997,-1.74391 -4.10964,-1.74687z" />
                              </g>
                            </g>
                          </svg>
                        </sup>
                      </a>
                      <a href="https://datacryptoanalytics.com/downloads" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Downloads</b>
                      </a>
                      <a href="https://datacryptoanalytics.com/academy/" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Academy <sup>learn</sup></b>
                      </a>
                      <a href="https://datacryptoanalytics.com/forecast/forex" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Previsões com Aprendizado de Máquina</b>
                      </a>
                      <a href="https://dashboard.mycheckout.com.br/register/61b7d8fd5774ba6b2f03c46f" target="_blank">
                        <i className="fas fa-external-link-alt" />
                        <b>Afiliados <sup>novo</sup></b>
                      </a>
                    </div>
                  </div>
                  <h5 style={{padding: '5px'}}>Instale nossos algoritmos pelo <b style={{color: '#ff8c05'}}>Terminal Linux</b> ou faça o Download:</h5>
                  <div className="terminal">
                    <p>
                      <b>
                        (base) <font color="#2CB02C"><b>[usuario@datacrypto-analytics</b></font><font color="#2CB02C"><b>]~$</b></font>
                        <span id="typed3" />
                      </b></p><b>
                    </b>
                  </div>
                  <div className="container" style={{padding: '25px', paddingRight: '50px'}}>
                    <center>
                      <span className="actions_down ">
                        <ul>
                          <li>
                            <a href="https://github.com/datacrypto-analytics/quant-analysis-cli/blob/main/README.md">
                              <i className="fab fa-linux imsombra" />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/datacrypto-analytics/quant-analysis-cli/archive/refs/tags/v0.1.zip">
                              <i className="fab fa-windows" />
                            </a>
                          </li>
                        </ul>
                      </span>
                      <hr />
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="container">
                  <center>
                    <img src="images/bg8.gif" className="imsombra" width="80%" height />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
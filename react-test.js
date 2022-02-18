var Navbar = React.createClass({
  render: function() {
    return (

      {/* navbar */}
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
      {/* end navbar */}
    );
  }
});
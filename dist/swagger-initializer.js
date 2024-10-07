const aliases = {
  'bittorrent-over-scion': {
    url: 'https://raw.githubusercontent.com/netsys-lab/bittorrent-over-scion/feature/http-ui/http_api/openapi3.yaml',
    name: 'http-ui@bittorrent-over-scion'
  },
}

window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  const params = new URLSearchParams(window.location.search);
  const alias = params.get('alias');
  const url = params.get('url');

  var swaggerUrl = null;
  if (alias != null && alias in aliases) {
    swaggerUrl = aliases[alias];
  } else if (url != null) {
    swaggerUrl = {
      url: url,
      name: 'url'
    };
  } else if (window.confirm('Click OK to get to the README on how to use that tool!')) {
    window.open('https://github.com/jmgraeffe/swagger-ui-linkable');
  }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      swaggerUrl,
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};

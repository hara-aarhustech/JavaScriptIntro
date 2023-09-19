async function loadMarkdown(path, target){
  const response = await fetch(path);
  const data = await response.text();

  document.getElementById(target).innerHTML = marked.parse(data);

  loadKlipse();
}

function loadKlipse() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"
  document.body.appendChild(script);
}
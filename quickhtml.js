(function() {
  var html = prompt('Insert HTML code.');
  var win = window.open();
  win.document.write(html);
  win.document.close();
}());

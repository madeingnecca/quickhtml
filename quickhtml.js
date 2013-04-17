(function() {
  var html = prompt('Insert HTML code.');
  if (html) {
    var win = window.open();
    win.document.write(html);
    win.document.close();
  }
}());

function Pixplorer(opts) {

  var template = tmpl('\
    <div class="grid__sizer"></div>\
    <div class="grid__gutter"></div>\
    <% var word = images[0].word, image;\
    for (var i = 0, l = images.length; i < l; i++) {\
      image = images[i]; %>\
      <div class="grid__item">\
        <img src="<%= image.imageurl %>">\
        <div class="grid__word"><%= word %></div>\
      </div>\
    <% } %>\
  ');

  this.start = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status == 200) {
        renderTiles(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.status + ': ' + xhr.statusText);
      }
    }
    return false;
  }

  function renderTiles(data) {
    opts.target.innerHTML = template({images: data.images});
    imagesLoaded(opts.target).on('always', opts.onLoad);
  };

}

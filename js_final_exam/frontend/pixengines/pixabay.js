function Pixabay(opts) {

  var template = tmpl('\
    <div class="grid__sizer grid__sizer--pixabay"></div>\
    <div class="grid__gutter"></div>\
    <% for (var i = 0, l = images.length; i < l; i++) {\
      var image = images[i]; %>\
      <div class="grid__item grid__item--pixabay">\
        <img class="grid__img grid__img--pixabay" src="<%= image.webformatURL %>">\
        <div class="grid__word grid__word--pixabay"><%= image.tags.split(",").join("") %></div>\
      </div>\
    <% } %>\
  ');

  /* key */var key = '&key=3636766-7834e9b7c899fe1ae52f8532f';/* key */
  var protocol = location.protocol; // same ajax protocol for prevent mixing content

  this.start = function(val) {
    val = val ? '&q=' + encodeURIComponent(val) : '';
    var uni = '&uni=' + (new Date()).getTime();
    var url = protocol + '//pixabay.com/api/?image_type=photo&per_page=12&orientation=horizontal' + val + key + uni;

/*
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
*/

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      renderTiles(JSON.parse(this.responseText));
    };
    xhr.onerror = function() {
      console.log('Error ' + this.status);
    };
    xhr.send();

  };

  function renderTiles(data) {
    opts.target.innerHTML = template({images: data.hits});
    imagesLoaded(opts.target).on('always', function() {
      opts.onLoad();
      var word = opts.target.querySelectorAll('.grid__word');
      for (var i = 0, l = word.length; i < l; i++) {
        word[i].style.display = 'block';
      }
    });
  }

}

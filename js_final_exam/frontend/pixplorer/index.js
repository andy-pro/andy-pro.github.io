function Pixplorer(form, opts) {
  form = document.querySelector(form);
  // console.log(form);

  var input = form.querySelector('input');
  // form.querySelector('button')
  console.log(input);

  var target = document.getElementById('gallery');

  form.onsubmit = function(e) {
    // console.log(this, e);

    // console.log(input.value, opts);
    var val = input.value;

    $.getJSON(
      opts.url + (val ? '&word=' + val : ''),
      function(data) {
        //  console.log(data);
        var images = data.images,
            html = '';
        for (var i = 0, l = images.length; i < l; i++) {
          var img = images[i];
          html += '<img src="' + img.imageurl + '">';
        }
        // console.log(html);
        target.innerHTML = html;
      }
    );

    return false;
  }

}

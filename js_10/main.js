/* lesson 10 */

$(function() {

  $(".jq-checkbox").each(function() {
    // bind events to labels
    $(this).on('mouseover mouseout focusin focusout', function(e) {
      var checkbox = this.children[0];
      $(checkbox).data('hover', e.type === 'mouseover' || e.type === 'focusin');
      setCheckboxImage.call(checkbox);
    });
    // setup checkboxes
    $(this.children[0])
      // shortcut to <span>
      .data('image', this.children[1])
      .on('change', setCheckboxImage);
    setCheckboxImage.call($(this.children[0]));
  });

  function setCheckboxImage() {
    var self = $(this),
        pos = 0;
    if (self.prop('checked')) pos += 17;
    if (self.prop('disabled')) pos += 68;
    else if (self.data('hover')) pos += 34;
    $(self.data('image')).css("background-position","0 -" + pos + "px");
  }

});

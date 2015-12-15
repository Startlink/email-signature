$(function() {
  $('#signature-form').submit(function(e) {
    e.preventDefault();
    var a = $(this).serializeArray();
    var d = {};
    a.forEach(function(e) {
      d[e.name] = e.value.trim();
    });
    if (d.name && d.position && d.phone && d.email) {
      d.phoneLink = d.phone.replace('+','%2B');
      var t = Handlebars.compile($('#signature-template').html());
      $('body').html(t({
        name: d.name,
        phone: d.phone,
        email: d.email,
        phoneLink: d.phoneLink,
        position: d.position
      }));
    }
  });
});

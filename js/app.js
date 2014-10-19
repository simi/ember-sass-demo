App = Ember.Application.create();

Sass.options({
  // format output: nested, expanded, compact, compressed
  style: Sass.style.nested, 
  // add line comments to output: none, default
  comments: Sass.comments.none
});

window.sassValue = "";

Ember.Handlebars.helper('convert-sass', function(sass) {
  var value = Sass.compile(sass);
  if(typeof value === 'string') {
    window.sassValue = value;
    return new Ember.Handlebars.SafeString(value);
  } else {
    return new Ember.Handlebars.SafeString(window.sassValue);
  }
});

Tinytest.add("Sample base", 
    function(test) {
      test.equal(1,1);
    });

Tinytest.add("word test",
    function(test) {
       div = renderToDiv(Template.sample);
       html = canonicalizeHtml(div.innerHTML);
       test.include(html, "Sample");
});

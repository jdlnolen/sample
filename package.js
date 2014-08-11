Package.describe({
   summary: "a sample package that adds text to home page"
});

Package.on_use(function (api, where) {
   api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

   api.add_files(['sample.js', 'sample.html'], 'client');

   if (api.export)
	api.export('Sample');
});

Package.on_test(function (api) {
   api.use(['tinytest',
       'handlebars',
       'test-helpers',
       'templating'
        ])
	api.use('sample')
    api.add_files([
        'tests/client.html',
        'tests/client.js'
        ], 'client')


});

var handlebars = require('handlebars'),
    fs = require('fs');

var data = {
    title: 'practical node.js',
    author: '@azat_co',
    tags: ['express', 'node', 'javascript']
}
data.body = process.argv[2];

fs.readFile('template.html', 'utf-8', function (error, source) {
    var template = handlebars.compile(source);
    var html = template(data);

    fs.writeFile("readme.md", html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});
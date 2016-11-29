var handlebars = require('handlebars'),
    fs = require('fs'),
    helpers = require('./helpers');

handlebars.registerHelper('inputs', helpers.inputs);
handlebars.registerHelper('outputs', helpers.outputs);
handlebars.registerHelper('variables', helpers.memberVariables);
handlebars.registerHelper('functions', helpers.memberFunctions);

//handlebars.registerHelper('outputs', helpers.bind(null, 'Outputs'));


fs.readFile('./docs/docs.json', 'utf-8', function (docError, data) {   
    fs.readFile('./scripts/template.html', 'utf-8', function (error, source) {
        var template = handlebars.compile(source);
        var html = template(JSON.parse(data));

        fs.writeFile("readme.md", html, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    });
});






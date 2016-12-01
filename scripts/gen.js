var handlebars = require('handlebars'),
    fs = require('fs'),
    helpers = require('./helpers'),
    typeDocDataParser = require('./parser');

//Registering the custom handlebar helpers
handlebars.registerHelper('inputs', helpers.inputs);
handlebars.registerHelper('outputs', helpers.outputs);
handlebars.registerHelper('variables', helpers.memberVariables);
handlebars.registerHelper('functions', helpers.memberFunctions);
handlebars.registerHelper('snippets', helpers.generateCodeSnippet);

//generate the readme.md files per directory
fs.readFile('./docs/docs.json', 'utf-8', function (docError, typedocsJson) {
    fs.readFile('./scripts/template.html', 'utf-8', function (error, markdownTemplate) {
        let typedocData = JSON.parse(typedocsJson);
        const docsByFolder = typeDocDataParser(typedocData);

        docsByFolder.forEach((typedocDataSubset) => {
            generateReadme(markdownTemplate, typedocDataSubset);
        });     
    });
});

/**
 * This generates the readme.md based on the handlebars template
 * and the typedoc data 
 */
function generateReadme(markdownTemplate, typedocData) {

    const template = handlebars.compile(markdownTemplate);
    const html = template(typedocData.data);

    //TODO this should be configurable
    const readmePath = "app/" + typedocData.folder + "/readme.md";

    fs.writeFile(readmePath, html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log(readmePath + ' saved');
    });
}




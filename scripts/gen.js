var handlebars = require('handlebars'),
    fs = require('fs'),
    helpers = require('./helpers'),
    typeDocDataParser = require('./parser');

//Registering the custom handlebar helpers
handlebars.registerHelper('component-snippets', helpers.renderCodeSnippet);
handlebars.registerHelper('component-inputs', helpers.renderComponentInputsTable);
handlebars.registerHelper('component-outputs', helpers.renderComponentOutputsTable);
handlebars.registerHelper('variables', helpers.renderMemberVariablesTable);
handlebars.registerHelper('functions', helpers.renderFunctionsTable);

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




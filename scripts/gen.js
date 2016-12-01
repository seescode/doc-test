var handlebars = require('handlebars'),
    fs = require('fs'),
    helpers = require('./helpers');

handlebars.registerHelper('inputs', helpers.inputs);
handlebars.registerHelper('outputs', helpers.outputs);
handlebars.registerHelper('variables', helpers.memberVariables);
handlebars.registerHelper('functions', helpers.memberFunctions);
handlebars.registerHelper('snippets', helpers.generateCodeSnippet);

//handlebars.registerHelper('outputs', helpers.bind(null, 'Outputs'));


fs.readFile('./docs/docs.json', 'utf-8', function (docError, typescriptDocsJson) {
    fs.readFile('./scripts/template.html', 'utf-8', function (error, markdownTemplate) {

        const docData = JSON.parse(typescriptDocsJson);


        const mappedData =
            docData.children.map((children) => {
                children.sources = children.sources.map((sources) => {
                    sources.fileName = sources.fileName.substring(0, sources.fileName.lastIndexOf("/"));
                    return sources;
                })

                return children;
            });

        //console.log(mappedData);
        const folders = collectFolderNames(mappedData);
        const docsByFolder = collectDocsByFolder(mappedData, folders);

        //loop through the array and generate the folder 
        //and write out the readme.md based on the folder location.
        docsByFolder.forEach((data) => {
            generateReadme(markdownTemplate, data);
        });

        
     
    });
});

function collectFolderNames(docData) {
    //Collect the folder names from the children array
    const names = docData.map((d) => d.sources[0].fileName);


    let uniqueFolderNames = new Set();

    names.forEach((name) => {
        //let removedFileName = name.substring(0, name.lastIndexOf("/"));
        uniqueFolderNames.add(name);
    });

    return uniqueFolderNames;
}

function collectDocsByFolder(docData, folders) {
    let docsByFolder = [];

    folders.forEach((folder) => {
        docsByFolder.push({
            folder: folder,
            data: docData.filter(x => x.sources[0].fileName == folder)
        })
    });

    return docsByFolder;
}

function generateReadme(markdownTemplate, typescriptDocsJson) {

    var template = handlebars.compile(markdownTemplate);
    var html = template(typescriptDocsJson.data);

    console.log(typescriptDocsJson.folder);

    fs.writeFile("app/" + typescriptDocsJson.folder + "/readme.md", html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}




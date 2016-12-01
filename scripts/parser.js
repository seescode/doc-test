/**
 * Maps so we get the folderName
 */
function mapTypedoc(typedocData){
    return typedocData.children.map((children) => {
                children.sources = children.sources.map((sources) => {
                    //remove the filename to get the foldername path
                    sources.folderName = sources.fileName.substring(0, sources.fileName.lastIndexOf("/"));
                    return sources;
                })

                return children;
            });    
}

/**
 * This finds all the folder paths from the typedoc json.
 */
function collectFolderNames(docData) {
    const folderNames = docData.map((d) => d.sources[0].folderName);
    let uniqueFolderNames = new Set(folderNames);
    return uniqueFolderNames;
}

/**
 * This generates an array of docs grouped by the folder.  
 * This is necessary to support the feature where we want
 * to have every folder have its own readme.md
 */
function collectDocsByFolder(docData, folders) {
    let docsByFolder = [];

    folders.forEach((folder) => {
        docsByFolder.push({
            folder: folder,
            data: docData.filter(child => child.sources[0].folderName == folder)
        })
    });

    return docsByFolder;
}

/**
 * Takes in typedocsData and then this
 * generates an array of docs grouped by the folder.  
 * This is necessary to support the feature where we want
 * to have every folder have its own readme.md
 */
module.exports = function(typedocsData) {
    const mappedData = mapTypedoc(typedocsData);
    const folders = collectFolderNames(mappedData);
    return collectDocsByFolder(mappedData, folders);
}
    
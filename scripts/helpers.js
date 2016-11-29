var handlebars = require('handlebars');

let inputsFilter = function(child) {
    return child.decorators != null && child.decorators[0].name === 'Input';
};

let outputsFilter = function(child) {
    return child.decorators != null && child.decorators[0].name === 'Output';
};

let memberVariablesFilter = function(child) {
    return child.decorators == null && child.signatures == null;    
}

function variables(label, filterFunction, data) {
    let generated = '';
    let filtered = data.filter(filterFunction);

    if (filtered.length > 0) {
        generated = '| ' + label + ' | Type | Description |\n' +
                    '| --- | --- | --- |\n';        
    }

    filtered.forEach(function(child) {
        generated += '| ' + child.name + ' | <code>' + child.type.name + '</code> | ' 
        
        if (child.comment && child.comment.shortText) {
            generated += child.comment.shortText;
        }
        generated += '\n';
    });

  return new handlebars.SafeString (generated);
}

module.exports = {
    inputs: variables.bind(null, 'Inputs', inputsFilter),
    outputs: variables.bind(null, 'Outputs', outputsFilter),
    memberVariables: variables.bind(null, 'Variables', memberVariablesFilter)
}
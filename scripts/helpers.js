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

let functionsFilter = function(child) {
    return child.signatures != null;    
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
        
        if (child.comment && (child.comment.shortText || child.comment.text)) {
            generated += child.comment.shortText || child.comment.text;
        }
        generated += '\n';
    });

  return new handlebars.SafeString(generated);
}

function params(parameters){
    let generated = '';

    if (parameters == null) {
        return '';
    }

    parameters.forEach(function(param) {
        generated += param.name + ', ';
    });

    //remove last comma and space
    if (generated.length > 0) {
        generated = generated.substr(0, generated.length - 2);
    }

    return generated;
}

function functions(data) {
    let generated = '';

    let filtered = data.filter(functionsFilter);

    filtered.forEach(function(child) {
        let signature = child.signatures[0];

        generated += '### ' + child.name + '(' + params(signature.parameters) + ')\n';

        if (signature && signature.comment) {
            generated += signature.comment.shortText + '\n\n';
        }

        if (signature.parameters != null && signature.parameters.length > 0) {
            generated += paramsFunction(signature.parameters);
        }

        generated += '\n';
    });    

    return new handlebars.SafeString(generated);
}

let paramsFunction = variables.bind(null, 'Param', () => true);

module.exports = {
    inputs: variables.bind(null, 'Inputs', inputsFilter),
    outputs: variables.bind(null, 'Outputs', outputsFilter),
    memberVariables: variables.bind(null, 'Variables', memberVariablesFilter),
    memberFunctions: functions
}

//TODO 
//-give better names to your variables
//-add comments 
//-
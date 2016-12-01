var handlebars = require('handlebars');

let inputsFilter = function (child) {
    return child.decorators != null && child.decorators[0].name === 'Input';
};

let outputsFilter = function (child) {
    return child.decorators != null && child.decorators[0].name === 'Output';
};

let memberVariablesFilter = function (child) {
    return child.decorators == null && child.signatures == null;
}

let functionsFilter = function (child) {
    return child.signatures != null;
}

let paramsFunction = variables.bind(null, 'Param', () => true);


function getType(type) {
    if (type.typeArguments == null) {
        if (type.isArray == true) {
            return type.name + '[]';
        }
        return type.name;
    }

    return type.name + '&lt;' + getType(type.typeArguments[0]) + '&gt;';
}


function variables(label, filterFunction, data) {
    let generated = '';

    console.log('data', data);

    let filtered = data.filter(filterFunction);

    if (filtered.length > 0) {
        generated = '| ' + label + ' | Type | Description |\n' +
            '| --- | --- | --- |\n';
    }

    filtered.forEach(function (child) {
        generated += '| ' + child.name + ' | <code>' + getType(child.type) + '</code> | '

        if (child.comment && (child.comment.shortText || child.comment.text)) {
            generated += child.comment.shortText || child.comment.text;
        }
        generated += '\n';
    });

    return new handlebars.SafeString(generated);
}

function params(parameters) {
    let generated = '';

    if (parameters == null) {
        return '';
    }

    parameters.forEach(function (param) {
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

    filtered.forEach(function (child) {
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

function generateCodeSnippet(data) {

    if (data[0].decorators == null ||
        data[0].decorators[0].name != 'Component') {
        return '';
    }

    componentName = extractSelector(data[0].decorators[0].arguments.obj);

    let generated = '**Example**\n```html\n<' + componentName + ' \n';

    let inputs = data[0].children.filter(inputsFilter);
    inputs.forEach(function (child) {
        generated += '\t[' + child.name + ']=""\n';
    });

    let outputs = data[0].children.filter(outputsFilter);
    outputs.forEach(function (child) {
        generated += '\t(' + child.name + ')=""\n';
    });

    generated += '\t></' + componentName + '>\n```';
    return new handlebars.SafeString(generated);
}

function extractSelector(str) {
    var re = /selector: '.*'/ig;
    var result = re.exec(str);

    var final = result[0].replace('selector: ', '')
    final = final.replace(/'/g, '')

    return final;
}

module.exports = {
    inputs: variables.bind(null, 'Inputs', inputsFilter),
    outputs: variables.bind(null, 'Outputs', outputsFilter),
    memberVariables: variables.bind(null, 'Variables', memberVariablesFilter),
    memberFunctions: functions,
    generateCodeSnippet: generateCodeSnippet
}

//TODO 
//-give better names to your variables
//-add comments 


//-"isArray": true,
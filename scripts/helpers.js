var handlebars = require('handlebars');

const inputsFilter = function (child) {
    return child.decorators != null && child.decorators[0].name === 'Input';
};

const outputsFilter = function (child) {
    return child.decorators != null && child.decorators[0].name === 'Output';
};

const memberVariablesFilter = function (child) {
    return child.decorators == null && child.signatures == null;
}

const functionsFilter = function (child) {
    return child.signatures != null;
}

const paramsFunction = renderVariablesTable.bind(null, 'Param', () => true);

/**
 * This correctly gets the type.  There's logic in here to handle
 * correctly getting generic types like EventEmitter<number[]>
 */
function renderType(type) {
    if (type.typeArguments == null) {
        if (type.isArray == true) {
            //handle arrays written like []
            return type.name + '[]';
        }
        return type.name;
    }

    //handle generics
    return type.name + '&lt;' + renderType(type.typeArguments[0]) + '&gt;';
}

/**
 * This generates a table with a list of variable names and
 * types.  This has been made generic so that it works with 
 * function params, interface members, and class member variables.
 */
function renderVariablesTable(label, filterFunction, data) {
    let generated = '';

    let filtered = data.filter(filterFunction);

    if (filtered.length > 0) {
        generated = '| ' + label + ' | Type | Description |\n' +
            '| --- | --- | --- |\n';
    }

    filtered.forEach(function (child) {
        generated += '| ' + child.name + ' | <code>' + renderType(child.type) + '</code> | '

        if (child.comment && (child.comment.shortText || child.comment.text)) {
            generated += child.comment.shortText || child.comment.text;
        }
        generated += '\n';
    });

    return new handlebars.SafeString(generated);
}

/**
 * Generates a list of params for a function.
 */
function renderParamsList(parameters) {
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

/**
 * Generates the function name with params and description.
 */
function renderFunctionsTable(data) {
    let generated = '';

    let filtered = data.filter(functionsFilter);

    filtered.forEach(function (child) {
        let signature = child.signatures[0];

        generated += '### ' + child.name + '(' + renderParamsList(signature.parameters) + ')\n';

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

/**
 * Generates a code snippet for an angular2 component.
 */
function renderCodeSnippet(data) {

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

/**
 * This handles looking through the decorators string to find
 * the component selector.  For example: app-pagination.
 */
function extractSelector(str) {
    var re = /selector: '.*'/ig;
    var result = re.exec(str);

    var final = result[0].replace('selector: ', '')
    final = final.replace(/'/g, '')

    return final;
}

module.exports = {
    renderComponentInputsTable: renderVariablesTable.bind(null, 'Inputs', inputsFilter),
    renderComponentOutputsTable: renderVariablesTable.bind(null, 'Outputs', outputsFilter),
    renderMemberVariablesTable: renderVariablesTable.bind(null, 'Variables', memberVariablesFilter),
    renderFunctionsTable: renderFunctionsTable,
    renderCodeSnippet: renderCodeSnippet
}

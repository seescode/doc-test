var gulp = require('gulp');

var typedoc = require("gulp-typedoc");
gulp.task("typedoc", function () {
    return gulp
        .src(["app/*.ts"])
        .pipe(typedoc({
            // module: "es6",
            // target: "es5",
            // json: "docs/docs.json",
            // name: "My project title",
            // "experimentalDecorators": "true"

            "mode": "modules",
            "out": "doc",
            "theme": "default",
            "ignoreCompilerErrors": "true",
            "experimentalDecorators": "true",
            "emitDecoratorMetadata": "true",
            "target": "ES5",
            "moduleResolution": "node",
            "preserveConstEnums": "true",
            "stripInternal": "true",
            "suppressExcessPropertyErrors": "true",
            "suppressImplicitAnyIndexErrors": "true",
            "module": "commonjs"
        }));
});
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: "source-map",
    externals: {
        angular: "angular",
        "angular-aria": "angular-aria",
        "angular-sanitize": "angular-sanitize",
        "bloodhound-js": "bloodhound-js",
        clipboard: "clipboard/dist/clipboard.min",
        "escape-string-regexp": "escape-string-regexp",
        flatpickr: "flatpickr",
        "popper.js": "popper.js",
        "ui-select": "ui-select"
    },
    output: {
        path: path.resolve(".", "dist"),
        filename: "oui-angular.min.js"
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        new webpack.optimize.ModuleConcatenationPlugin() // Enable scope hoisting
    ]
});

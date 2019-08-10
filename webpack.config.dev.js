const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [ "babel-polyfill", "./src/index.js" ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.min.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "/dist",
        // publicPath: "/dist/",
        compress: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/HTML/index.html",
            filename: "./index.html"
        })
    ]
};

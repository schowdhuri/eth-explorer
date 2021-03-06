const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.min.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.s?css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.(woff)|(eot)|(ttf)|(svg)|(png)|(jpe?g)|(gif)/,
            use: {
                loader: "file-loader"
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

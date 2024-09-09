// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js', // Main entry point
        home: './src/js/homePage.js',
        about: './src/js/menuPage.js',
        contact: './src/js/contactPage.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: "./src/html/home.html",
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: "./src/html/menu.html",
            chunks: ['menu']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: "./src/html/contact.html",
            chunks: ['contact']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset/resource',
            },
        ],
    },
};
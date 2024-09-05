// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // Handle image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/', // Directory in the dist folder
                            name: '[name].[ext]'   // Preserve original file name and extension
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // Handle font files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/', // Directory in the dist folder
                            name: '[name].[ext]'   // Preserve original file name and extension
                        }
                    }
                ]
            }
        ],
    },
};